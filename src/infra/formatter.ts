export const formatStringOrError = (content: string | Error) => {
  return content instanceof Error
    ? `[${content.name}] ${content.message}`
    : content
}
