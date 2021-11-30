const fetchGet = async () => {
  let response;
  try {
    response = await fetch('data/projects.json');
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error(`network fetchGet error`, error.message);
  }
  const responseData = await response.json();
  return responseData;
};

export {fetchGet};