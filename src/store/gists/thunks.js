import { getGistsStart, getGistsSucess, getGistsError } from "./action";

export const getGists = (page) => async (dispatch, _, api) => {
  try {
    dispatch(getGistsStart());

    const { data } = await api.getPublicGistsApi(page);

    dispatch(getGistsSucess(data));
  } catch (e) {
    dispatch(getGistsError(e));
  }
};