import React from 'react';

const url = "https://ovrstat.com/stats";

export function getProfile(platform, name){
  const endpoint = `${url}/${platform}/${name}`
  return fetch(endpoint).then((res) => {return res.json()});
}
