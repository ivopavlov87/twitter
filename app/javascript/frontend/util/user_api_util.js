import csrf_token from './csrf_token_util'

export const fetchUser = id => (
  $.ajax({
    method: `GET`,
    url: `/api/users/${id}`
  })
);

export const fetchUsers = () => (
  $.ajax({
    method: `GET`,
    url: `/api/users`
  })
);