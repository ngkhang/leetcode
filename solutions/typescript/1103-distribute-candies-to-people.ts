/**
 * @link https://leetcode.com/problems/distribute-candies-to-people/
 */
export function distributeCandies(
  candies: number,
  num_people: number
): number[] {
  const peoples: number[] = Array.from<number>({ length: num_people }).fill(0);
  let n = 1;
  let peopleIndex = 0;

  while (candies > 0) {
    const newCandy = Math.min(n, candies);

    peoples[peopleIndex] += newCandy;
    n++;
    candies -= newCandy;
    peopleIndex = (peopleIndex + 1) % num_people;
  }

  return peoples;
}
