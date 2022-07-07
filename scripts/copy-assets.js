const fs = require('fs-extra');
(async () => {
    try {
        const source = 'projects/cqube-library/src/lib/assets';
        const dest = 'dist/cqube-library/assets';
        const isAssetsExists = await fs.pathExists(dest)

        if (isAssetsExists) {
            await fs.remove(dest);
        }
        await fs.copy(source, dest)
        console.log('Assets copied successfully')
    } catch (err) {
        console.error("Error while copying assets", err)
    }
})();