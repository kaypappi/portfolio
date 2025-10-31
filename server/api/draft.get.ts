export default defineEventHandler(async (event) => {
  const { enable } = getQuery(event)

  if (enable === 'true') {
    // Enable draft mode by setting a cookie
    setCookie(event, '__sanity_preview', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 // 24 hours
    })
    return 'Draft mode enabled'
  } else if (enable === 'false') {
    // Disable draft mode by clearing the cookie
    setCookie(event, '__sanity_preview', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 0
    })
    return 'Draft mode disabled'
  }

  throw createError({
    statusCode: 400,
    statusMessage: 'Invalid query parameter'
  })
})
