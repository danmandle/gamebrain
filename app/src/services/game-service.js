gameService.$inject = ['$http', 'apiUrl'];

export default function gameService($http, apiUrl) {
  return {
    search(query) {
      return $http.get(`${apiUrl}/games?search=${query}`)
        .then(res => res.data);
    },
    add(bggId) {
      return $http.post(`${apiUrl}/games`, { bggId })
        .then(res => res.data);
    }
  };
}