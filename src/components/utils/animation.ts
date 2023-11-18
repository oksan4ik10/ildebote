/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-inner-declarations */
const animation = () => {
    console.log(23);
    // eslint-disable-next-line prefer-const
    let canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const div = document.createElement("div");
    div.className = "stop-game";
    document.body.append(div);

    if (canvas) {


        const ctx = canvas.getContext("2d");
        let loading = true;
        canvas.height = 300;
        canvas.width = 500;
        canvas.classList.remove("active");
        const parts: any[] = [],
            minSpawnTime = 10;
        let lastTime = new Date().getTime();
        const maxLifeTime = Math.min(5000, (canvas.height / (1.5 * 60) * 1000)),
            emitterX = canvas.width / 2 - 100,
            emitterY = canvas.height / 2 - 50,
            smokeImage = new Image();

        function spawn() {
            if (new Date().getTime() > lastTime + minSpawnTime) {
                lastTime = new Date().getTime();
                parts.push(new (smoke as any)(emitterX, emitterY));
            }
        }

        const start = Date.now();


        const id = requestAnimationFrame(render);
        let startGame = true;
        function render() {
            if (!startGame) return false;
            if ((startGame) && ctx) {
                if (loading) {
                    load();
                    return false;
                }
                let len = parts.length;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                const timePassed = Date.now() - start;
                while (len--) {
                    if (parts[len].y < 0 || parts[len].lifeTime > maxLifeTime) {
                        parts.splice(len, 1);
                    } else {
                        parts[len].update();

                        ctx.save();
                        const offsetX = -parts[len].size / 2,
                            offsetY = -parts[len].size / 2;

                        ctx.translate(parts[len].x - offsetX, parts[len].y - offsetY);
                        ctx.rotate(parts[len].angle / 180 * Math.PI);
                        ctx.globalAlpha = parts[len].alpha;
                        ctx.drawImage(smokeImage, offsetX, offsetY, parts[len].size, parts[len].size);
                        ctx.restore();
                    }
                }
                spawn();
                if (timePassed >= 4000) {

                    cancelAnimationFrame(id);
                    canvas.classList.add("active");
                    div.remove();
                    setTimeout(() => {
                        ctx.clearRect(0, 0, canvas.width, canvas.height)
                    }, 500);
                    startGame = false
                    return;
                } else {
                    requestAnimationFrame(render)
                }
            }
        }


        function smoke(x: number, y: number) {
            this.x = x;
            this.y = y;

            this.size = 1;
            this.startSize = 32;
            this.endSize = 80;

            this.angle = Math.random() * 359;

            this.startLife = new Date().getTime();
            this.lifeTime = 0;

            this.velY = -1 - (Math.random() * 0.5);
            this.velX = Math.floor(Math.random() * (-6) + 3) / 2;
        }

        smoke.prototype.update = function () {
            this.lifeTime = new Date().getTime() - this.startLife;
            this.angle += 0.2;

            const lifePerc = ((this.lifeTime / maxLifeTime) * 100);

            this.size = this.startSize + ((this.endSize - this.startSize) * lifePerc * .1);

            this.alpha = 1 - (lifePerc * .01);
            this.alpha = Math.max(this.alpha, 0);

            this.x += this.velX;
            this.y += this.velY;
        }
        const img = document.querySelector(".animation__img") as HTMLImageElement;


        smokeImage.src = img ? img.src : "";
        smokeImage.onload = function () {
            loading = false;
        }

        // eslint-disable-next-line no-inner-declarations
        function load() {
            if (loading) {
                setTimeout(load, 100);
            } else {
                render();
                return false;
            }
        }
        render();
    }


}

export default animation;