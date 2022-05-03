export function checkObjectId(id) {
  return /^[0-9a-fA-F]{24}$/.test(id);
}

export function checkNameOrLastName(value) {
  return (
    value &&
    /^([A-Z\u00C0-\u024F\u1E00-\u1EFF]?)+([[A-Za-z\u00C0-\u024F\u1E00-\u1EFF]+[,.]?[ ]?|[A-Za-z\u00C0-\u024F\u1E00-\u1EFF]+['-]]?)+$/.test(
      `${value}`
    )
  );
}

export function checkTitlesOrDescriptions(value) {
  return value && /^[a-zA-ZÁÉÍÓÚÀÈÌÒÙàèìòùáéíóúÂÊÎÔÛâêîôûÄËÏÖÜäëïöüñÑ0-9\s.,#*?¿¡!()\-+"'/@]{3,2000}/g.test(`${value}`);
}

export default {
  checkObjectId,
  checkNameOrLastName,
  checkTitlesOrDescriptions,
};
