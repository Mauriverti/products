import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import { useProtectedRoutes } from '../contexts/ProtectedRoutes.provider'

export default function useHTTPRepository() {
  const { user } = useProtectedRoutes()

  const withToken = {
    Authorization: `Bearer ${user?.token}`,
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function post<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    const safeConfig = config || {}
    const newHeader = (safeConfig.headers = {
      ...config?.headers,
      ...withToken,
    })
    const newConfig = {
      ...config,
      ...{ header: newHeader },
    }

    return axios.post(url, data, newConfig)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function get<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
    const safeConfig = config || {}
    const newHeader = (safeConfig.headers = {
      ...config?.headers,
      ...withToken,
    })
    const newConfig = {
      ...config,
      ...{ header: newHeader },
    }

    return axios.get(url, newConfig)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function remove<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    const safeConfig = config || {}
    const newHeader = (safeConfig.headers = {
      ...config?.headers,
      ...withToken,
    })
    const newConfig = {
      ...config,
      ...{ header: newHeader },
    }

    return axios.delete(url, newConfig)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function put<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    const safeConfig = config || {}
    const newHeader = (safeConfig.headers = {
      ...config?.headers,
      ...withToken,
    })
    const newConfig = {
      ...config,
      ...{ header: newHeader },
    }

    return axios.put(url, data, newConfig)
  }

  return { post, get, remove, put }
}
