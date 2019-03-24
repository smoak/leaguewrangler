import { parse } from 'cookie';

export type GetCookie = (name: string) => string | undefined;
export const get: GetCookie = name => {
  const parsed = parse(document.cookie);
  return parsed[name];
};
