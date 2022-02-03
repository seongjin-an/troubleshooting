export const createMockCard = () => ({
  id: new Date().getTime(),
  name: Math.random().toString(36).replace(/[^a-z]+/g, ''),
  image: `https://picsum.photos/500/800?${new Date().getTime()}`,
  age: Math.floor(Math.random() * 22) + 18,
  company: Math.random().toString(36).replace(/[^a-z]+/g, ''),
  education: Math.random().toString(36).replace(/[^a-z]+/g, ''),
});

// 비동기 호출 대신 사용
export const checkIsMatched = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      data: {
        isMatched: true
      },
      code: 200,
    });
  }, 2000)
});