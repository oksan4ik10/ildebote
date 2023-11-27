export const resize = () => {
    const appHeight = () => {
        const doc = document.documentElement;
        console.log(doc);

        doc.style.setProperty('--app-height', '${window.innerHeight}px')
    }
    window.addEventListener('resize', appHeight)
    appHeight()
}