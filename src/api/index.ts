type EntityType = {
  name: string;
  id: string;
  image: string;
  bgColor: string;
  tags: string[];
};

const getResponse = async () => {
  const responce = await fetch('https://logiclike.com/docs/courses.json', { method: 'GET' });
  const data: EntityType[] = await responce.json();
  const allTags: string[] = data.map((el) => el.tags).flat();
  const availableTags: string[] = Array.from(new Set(allTags));
  return { data, availableTags };
};

export { type EntityType, getResponse };
