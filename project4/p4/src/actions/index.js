export const search = base => {
  return {
    type: "SEARCH",
    payload: base
  };
};

export const filter = q => {
  return {
    type: "FILTER",
    payload: q
  };
};

export const details = a => {
  return {
    type: "DETAILS",
    payload: a
  };
};

export const nextPage = () => {
  return {
    type: "NEXT"
  };
};

export const prevPage = () => {
  return {
    type: "PREVIOUS"
  };
};

export const defaultPage = () => {
  return {
    type: "DEFAULT"
  };
};

export const isOverlayVisible = () => {
  return {
    type: "VISIBLE"
  };
};

export const toggleSideMenu = () => {
  return {
    type: "SIDEMENU"
  };
};

export const sortingCategory = a => {
  return {
    type: "SORT",
    payload: a
  };
};

export const dataRetriever = a => {
  return {
    type: "RETRIEVE",
    payload: a
  };
};

export const data = a => {
  return {
    type: "DATA",
    payload: a
  };
};

export const dataOverlay = () => {
  return {
    type: "DATAOVERLAY"
  };
};
