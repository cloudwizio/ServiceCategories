import fs from 'fs';

const buff = fs.readFileSync('/Users/abhishekmane/Downloads/cat.json');
const data = JSON.parse(buff.toString());
const d = [];
for (const category of data.services) {
  // console.log(category.category, '-', category.subcategory);
  for (const obj of category.service) {
    const provider = Object.keys(obj)[0];
    for (const service of obj[provider]) {
      if (!service.name) continue;
      d.push(
        JSON.stringify({
          category: category.category,
          subcategory: category.subcategory,
          provider,
          service: service.name,
        })
      );
    }
  }
}
fs.writeFileSync('/Users/abhishekmane/Downloads/cat-out.json', d.join('\n'));
