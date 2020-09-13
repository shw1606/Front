export function request(draft, data) {}

export function suceess(draft, data) {
  draft.seriesList.push(data);
}

export function failure(draft, data) {}
