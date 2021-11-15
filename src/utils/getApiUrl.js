const getApiUrl = () => {
  return !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? 'http://127.0.0.1:8787'
    : 'https://intern-worker.natewong.workers.dev'
}

export default getApiUrl
