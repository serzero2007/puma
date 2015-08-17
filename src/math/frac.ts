/// <reference path="Interfaces.ts" />


class Frac implements Drawable {

    static LINE_WIDTH = 1;
    static LINE_Y_PADDING = 3;

    num: Drawable;
    denom: Drawable;
    context: any;

    constructor(num: Drawable, denom: Drawable);
    constructor(num: any, denom: any) {
        this.num = num || new Basic();
        this.denom = denom || new Basic();
    }

    getBB(): BoundingBox {
        return {width: 10, height: 10};
    }

    getWidth(): number {
        return Math.max( this.num.getWidth(), this.denom.getWidth() );
    }

    getHeight(): number {
        return this.num.getHeight() + this.denom.getHeight() + Frac.LINE_WIDTH;
    }

    draw(context: any): void {
        var numBB = this.num.getBB();
        var denomBB = this.num.getBB();

        var width = this.getWidth();
        var height = this.getHeight();

        console.log("Frac height IS: ", height);

        var lineY = this.num.getHeight() + Frac.LINE_Y_PADDING;
        var lineX = 0;

        context.beginPath();
        context.moveTo(lineX, lineY);
        context.lineTo(lineX + width, lineY);
        context.stroke();

        this.num.draw( new Context(context, context.getCanvas(), 0, 0) );
        this.denom.draw( new Context(context, context.getCanvas(), 0, lineY + Frac.LINE_Y_PADDING) );
    }
};
