export type PartialWithMandatory<T, K extends keyof T> = Pick<T, K> & Partial<Omit<T, K>>
export type Status = 'idle' | 'pending' | 'resolved' | 'rejected'
export type Langs = 'en' | 'no'
