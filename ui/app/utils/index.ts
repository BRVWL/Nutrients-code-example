export const normalizeResponse = (arr: any[]): { [id: number]: any } =>
  arr.reduce(
    (acc: any, curr: any) => ({
      ...acc,
      [curr.id]: curr,
    }),
    {},
  );

export const normalizeResponseAndInject = (
  arr: any[],
  prop: any,
): { [id: number]: any } =>
  arr.reduce(
    (acc: any, curr: any) => ({
      ...acc,
      [curr.id]: { ...curr, ...prop },
    }),
    {},
  );
