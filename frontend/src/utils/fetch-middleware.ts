export async function request<ResType, Err>(
  path: string,
  opts: RequestOptions,
): RequestRes<ResType, Err> {
  const { parseMethod, expectedStatusCode, fullUrl } = opts

  try {
    const response = await fetch(
      fullUrl || (process.env.API_URL || 'https://dev-api.artifik.no/') + path,
      getFetchOptions(opts),
    )
    const parsedRes = await getFetchResults(response, parseMethod, expectedStatusCode)
    return [parsedRes.payload === undefined ? parsedRes : parsedRes.payload, null]
  } catch (error: any) {
    return [null, error || 'There was an error.']
  }
}

const getFetchResults = async (
  response: Response,
  parseMethod: RequestOptions['parseMethod'] = 'json',
  expectedStatusCode: RequestOptions['expectedStatusCode'] = 200,
) => {
  if (response.status !== expectedStatusCode) {
    const error = await response.json()
    if (!error) throw new Error('There was an error.')

    throw error
  }

  return expectedStatusCode === 204 ? true : await response[parseMethod]()
}

const getFetchOptions = ({
  headersOpts,
  sendToken,
  body,
  method,
  parseBody = true,
}: RequestOptions): RequestInit => ({
  method: method,
  headers: getHeaders(headersOpts, sendToken),
  body: parseBody === false ? body : body !== undefined ? JSON.stringify(body) : undefined,
  redirect: 'follow',
})

function getHeaders(
  headersOpts: RequestOptions['headersOpts'] = [
    { key: 'Content-Type', value: 'application/json' },
  ],
  sendToken: RequestOptions['sendToken'] = true,
) {
  const headers = new Headers()
  headersOpts.forEach((opt: { key: string; value: string }) => {
    headers.append(opt.key, opt.value)
  })
  if (sendToken) {
    const token = localStorage.getItem('access_token')
    if (!token) throw new Error('Invalid access token')

    headers.append('Authorization', token)
  }

  return headers
}

interface RequestOptions {
  parseMethod?: 'json' | 'text' | 'blob' | 'formData' | 'clone' | 'arrayBuffer'
  expectedStatusCode?: 200 | 201 | 203 | 204
  headersOpts?: {
    key: string
    value: string
  }[]
  method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE'
  body?: any
  sendToken?: boolean
  fullUrl?: string
  parseBody?: boolean
}

export type RequestRes<ResType, Err> = Promise<[ResType | null, null | Err]>
export type BasicError = { message: string }
