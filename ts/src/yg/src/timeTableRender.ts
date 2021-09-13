
class TimeTableRender {
    public context: CanvasRenderingContext2D;
    public radius: number;
    public topMargin: number;
    public leftMargin: number;

    public piesData: {
        label: string,
        fromTime: number,
        toTime: number,
        colorCode: string
    }[] = [];

    constructor(
        context: CanvasRenderingContext2D,
        radius: number,
        topMargin: number,
        leftMargin: number
    ) {
        this.context = context;
        this.radius = radius;
        this.topMargin = topMargin;
        this.leftMargin = leftMargin;
    }

    public render() {
        this.drawBackgroundCircle();
        this.printTimeLabel();
    }

    private drawBackgroundCircle(){
        const ctx = this.context;
        const radius = this.radius;
        ctx.beginPath();
        ctx.arc(
            radius + this.leftMargin,
            radius + this.topMargin,
            radius, 0, Math.PI * 2
        );
        ctx.stroke();
    }

    private printTimeLabel() {
        const ctx = this.context;
        let angleStep = 2 / 24;
        let angle = angleStep;
        let count = 1;
        ctx.font = '12pt serif';
        for (let cnt = 1; 24 >= cnt; cnt++, angle += angleStep) {
            ctx.fillText(count + "시",
                this.leftMargin + this.radius + Math.cos(angle) * this.radius,
                this.topMargin + this.radius + Math.sin(angle) * this.radius
                );
        }
    }

    private drawPies() {

    }

    private drawPie() {

    }

    private printPieLabel() {

    }


}


export default TimeTableRender;