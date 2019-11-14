export function updateProfileRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
}
export function updateTempIdProfile(id) {
  return {
    type: '@user/UPDATE_TEMP_ID_PROFILE',
    payload: { avatar_id: id },
  };
}

export function updateProfileFailed() {
  return {
    type: '@user/UPDATE_PROFILE_FAILED',
  };
}
