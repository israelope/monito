// This helper function turns Vite's import object into a clean, named object.
function createImageObjects(modules) {
    const imageCollection = {};
    for (const path in modules) {
        // 'Pedigree.png' -> 'Pedigree'
        const key = path.split('/').pop().split('.')[0];
        imageCollection[key] = modules[path];
    }
    return imageCollection;
}

// 1. Find and import all images from the '/img/' folder
const mainImageModules = import.meta.glob('/src/assets/img/*.{png,jpg,jpeg,svg}', { eager: true, as: 'url' });
export const mainImages = createImageObjects(mainImageModules);
// Now you can access images like mainImages.HeroImg, mainImages.Sellers, etc.

// 2. Find and import all icons from the '/icons/' folder
const iconModules = import.meta.glob('/src/assets/icons/*.{png,jpg,jpeg,svg}', { eager: true, as: 'url' });
export const iconImages = createImageObjects(iconModules);
// Now you can access icons like iconImages.Pedigree, iconImages.Felix, etc.