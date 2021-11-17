import {
  concurrent,
  delay,
  filter,
  map,
  pipe,
  range,
  takeUntil,
  toArray,
  toAsync,
} from "../../src/index";
import { AsyncFunctionException } from "../../src/_internal/error";

describe("takeUntil", function () {
  describe("sync", function () {
    it("should be able to take the element until the callback result is truthy", function () {
      const res = [];
      for (const item of takeUntil((a) => a % 2 === 0, [1, 2, 3, 4])) {
        res.push(item);
      }
      expect(res).toEqual([1, 2]);

      const res1 = toArray(takeUntil((a) => a % 2 === 0, [1, 2, 3, 4]));
      expect(res1).toEqual([1, 2]);

      const res2 = toArray(takeUntil((a) => a > 5, [1, 2, 3, 4]));
      expect(res2).toEqual([1, 2, 3, 4]);
    });

    it("should throw an erorr when the callback is asynchronous", function () {
      const res = () => [...takeUntil(async (a) => a % 2 === 0, [1, 2, 3, 4])];
      expect(res).toThrowError(new AsyncFunctionException());
    });

    it("should be able to be used as a curried function in the pipeline", function () {
      const res = pipe(
        [1, 2, 3, 4],
        map((a) => a + 10),
        filter((a) => a % 2 === 0),
        takeUntil((a) => a > 12),
        toArray,
      );

      expect(res).toEqual([12, 14]);
    });
  });

  describe("async", function () {
    it("should be able to take the element until the callback result is truthy", async function () {
      const res = [];
      // prettier-ignore
      for await (const item of takeUntil((a) => a % 2 === 0, toAsync([1, 2, 3, 4]))) {
      res.push(item);
    }
      expect(res).toEqual([1, 2]);

      // prettier-ignore
      const res1 = await toArray(takeUntil((a) => a % 2 === 0, toAsync([1, 2, 3, 4])));
      expect(res1).toEqual([1, 2]);

      const res2 = await toArray(
        takeUntil((a) => a > 5, toAsync([1, 2, 3, 4])),
      );
      expect(res2).toEqual([1, 2, 3, 4]);
    });

    it("should be able to take the element until the async callback result is truthy", async function () {
      const res = [];
      // prettier-ignore
      for await (const item of takeUntil((a) => a % 2 === 0, toAsync([1, 2, 3, 4]))) {
      res.push(item);
    }
      expect(res).toEqual([1, 2]);

      // prettier-ignore
      const res1 = await toArray(takeUntil(async(a) => a % 2 === 0, toAsync([1, 2, 3, 4])));
      expect(res1).toEqual([1, 2]);

      // prettier-ignore
      const res2 = await toArray(takeUntil(async(a) => a > 5, toAsync([1, 2, 3, 4])));
      expect(res2).toEqual([1, 2, 3, 4]);
    });

    it("should be able to be used as a curried function in the pipeline", async function () {
      const res = await pipe(
        toAsync([1, 2, 3, 4]),
        map((a) => a + 10),
        filter((a) => a % 2 === 0),
        takeUntil((a) => a > 12),
        toArray,
      );

      expect(res).toEqual([12, 14]);
    });

    it("should be able to take the element until the callback result is truthy concurrently", async function () {
      const res = await pipe(
        toAsync(range(1, 20)),
        takeUntil((a) => a > 12),
        concurrent(4),
        toArray,
      );

      expect(res).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
    });

    it("should be consumed 'AsyncIterable' as many times as called with 'next'", async function () {
      const res = pipe(
        toAsync(range(1, 500)),
        map((a) => delay(100, a + 10)),
        takeUntil((a) => a > 14),
        concurrent(2),
      );

      const { value: v1 } = await res.next();
      const { value: v2 } = await res.next();
      const { value: v3 } = await res.next();
      const { value: v4 } = await res.next();
      const { value: v5 } = await res.next();
      const { value: v6 } = await res.next();

      expect(v1 + v2 + v3 + v4 + v5).toEqual(11 + 12 + 13 + 14 + 15);
      expect(v6).toEqual(undefined);
    }, 350);

    it("should be consumed concurrently", async function () {
      const res = await pipe(
        toAsync(range(1, 500)),
        map((a) => delay(100, a + 10)),
        filter((a) => a % 2 === 0),
        takeUntil((a) => a > 20),
        concurrent(2),
        toArray,
      );
      expect(res).toEqual([12, 14, 16, 18, 20, 22]);
    }, 850);
  });
});
