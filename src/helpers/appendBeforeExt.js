function appendBeforeExt(url = "", appendString = "") {
  const urlStart = url.substring(url.lastIndexOf("."), 0);
  const urlEnd = url.substring(url.lastIndexOf("."));

  return url && `${urlStart}${appendString}${urlEnd}`;
}

export default appendBeforeExt;
