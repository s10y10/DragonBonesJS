namespace dragonBones {
    /**
     * The egret event.
     * @version DragonBones 4.5
     * @language en_US
     */
    /**
     * Egret 事件。
     * @version DragonBones 4.5
     * @language zh_CN
     */
    export class EgretEvent extends egret.Event {
        /**
         * The event object.
         * @see dragonBones.EventObject
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * 事件对象。
         * @see dragonBones.EventObject
         * @version DragonBones 4.5
         * @language zh_CN
         */
        public get eventObject(): EventObject {
            return this.data;
        }

        /**
         * Deprecated, please refer to {@link #eventObject} {@link #dragonBones.EventObject#animationState}.
         * @deprecated
         * @language en_US
         */
        /**
         * 已废弃，请参考 {@link #eventObject} {@link #dragonBones.EventObject#animationState}。
         * @deprecated
         * @language zh_CN
         */
        public get animationName(): string {
            const animationState = this.eventObject.animationState;
            return animationState !== null ? animationState.name : "";
        }
        /**
         * Deprecated, please refer to {@link #eventObject} {@link #dragonBones.EventObject#armature}.
         * @deprecated
         * @language en_US
         */
        /**
         * 已废弃，请参考 {@link #eventObject} {@link #dragonBones.EventObject#armature}。
         * @deprecated
         * @language zh_CN
         */
        public get armature(): Armature {
            return this.eventObject.armature;
        }
        /**
         * Deprecated, please refer to {@link #eventObject} {@link #dragonBones.EventObject#bone}.
         * @deprecated
         * @language en_US
         */
        /**
         * 已废弃，请参考 {@link #eventObject} {@link #dragonBones.EventObject#bone}。
         * @deprecated
         * @language zh_CN
         */
        public get bone(): Bone | null {
            return this.eventObject.bone;
        }
        /**
         * Deprecated, please refer to {@link #eventObject} {@link #dragonBones.EventObject#slot}.
         * @deprecated
         * @language en_US
         */
        /**
         * 已废弃，请参考 {@link #eventObject} {@link #dragonBones.EventObject#slot}。
         * @deprecated
         * @language zh_CN
         */
        public get slot(): Slot | null {
            return this.eventObject.slot;
        }
        /**
         * Deprecated, please refer to {@link #eventObject} {@link #dragonBones.EventObject#animationState}.
         * @deprecated
         * @language en_US
         */
        /**
         * 已废弃，请参考 {@link #eventObject} {@link #dragonBones.EventObject#animationState}。
         * @deprecated
         * @language zh_CN
         */
        public get animationState(): AnimationState | null {
            return this.eventObject.animationState;
        }
        /**
         * Deprecated, please refer to {@link #eventObject} {@link #dragonBones.EventObject#name}.
         * @deprecated
         * @language en_US
         */
        /**
         * 已废弃，请参考 {@link #eventObject} {@link #dragonBones.EventObject#name}。
         * @deprecated
         * @language zh_CN
         */
        public get frameLabel(): string {
            return this.eventObject.name;
        }
        /**
         * Deprecated, please refer to {@link #eventObject} {@link #dragonBones.EventObject#name}.
         * @deprecated
         * @language en_US
         */
        /**
         * 已废弃，请参考 {@link #eventObject} {@link #dragonBones.EventObject#name}。
         * @deprecated
         * @language zh_CN
         */
        public get sound(): string {
            return this.eventObject.name;
        }
        /**
         * Deprecated, please refer to {@link #eventObject} {@link #dragonBones.EventObject#animationState}.
         * @deprecated
         * @language en_US
         */
        /**
         * 已废弃，请参考 {@link #eventObject} {@link #dragonBones.EventObject#animationState}。
         * @deprecated
         * @language zh_CN
         */
        public get movementID(): string {
            return this.animationName;
        }
        /**
         * Deprecated, please refer to {@link #dragonBones.EventObject.START}.
         * @deprecated
         * @language en_US
         */
        /**
         * 已废弃，请参考 {@link #dragonBones.EventObject.START}。
         * @deprecated
         * @language zh_CN
         */
        public static START: string = EventObject.START;
        /**
         * Deprecated, please refer to {@link #dragonBones.EventObject.LOOP_COMPLETE}.
         * @deprecated
         * @language en_US
         */
        /**
         * 已废弃，请参考 {@link #dragonBones.EventObject.LOOP_COMPLETE}。
         * @deprecated
         * @language zh_CN
         */
        public static LOOP_COMPLETE: string = EventObject.LOOP_COMPLETE;
        /**
         * Deprecated, please refer to {@link #dragonBones.EventObject.COMPLETE}.
         * @deprecated
         * @language en_US
         */
        /**
         * 已废弃，请参考 {@link #dragonBones.EventObject.COMPLETE}。
         * @deprecated
         * @language zh_CN
         */
        public static COMPLETE: string = EventObject.COMPLETE;
        /**
         * Deprecated, please refer to {@link #dragonBones.EventObject.FADE_IN}.
         * @deprecated
         * @language en_US
         */
        /**
         * 已废弃，请参考 {@link #dragonBones.EventObject.FADE_IN}。
         * @deprecated
         * @language zh_CN
         */
        public static FADE_IN: string = EventObject.FADE_IN;
        /**
         * Deprecated, please refer to {@link #dragonBones.EventObject.FADE_IN_COMPLETE}.
         * @deprecated
         * @language en_US
         */
        /**
         * 已废弃，请参考 {@link #dragonBones.EventObject.FADE_IN_COMPLETE}。
         * @deprecated
         * @language zh_CN
         */
        public static FADE_IN_COMPLETE: string = EventObject.FADE_IN_COMPLETE;
        /**
         * Deprecated, please refer to {@link #dragonBones.EventObject.FADE_OUT}.
         * @deprecated
         * @language en_US
         */
        /**
         * 已废弃，请参考 {@link #dragonBones.EventObject.FADE_OUT}。
         * @deprecated
         * @language zh_CN
         */
        public static FADE_OUT: string = EventObject.FADE_OUT;
        /**
         * Deprecated, please refer to {@link #dragonBones.EventObject.FADE_OUT_COMPLETE}.
         * @deprecated
         * @language en_US
         */
        /**
         * 已废弃，请参考 {@link #dragonBones.EventObject.FADE_OUT_COMPLETE}。
         * @deprecated
         * @language zh_CN
         */
        public static FADE_OUT_COMPLETE: string = EventObject.FADE_OUT_COMPLETE;
        /**
         * Deprecated, please refer to {@link #dragonBones.EventObject.FRAME_EVENT}.
         * @deprecated
         * @language en_US
         */
        /**
         * 已废弃，请参考 {@link #dragonBones.EventObject.FRAME_EVENT}。
         * @deprecated
         * @language zh_CN
         */
        public static FRAME_EVENT: string = EventObject.FRAME_EVENT;
        /**
         * Deprecated, please refer to {@link #dragonBones.EventObject.SOUND_EVENT}.
         * @deprecated
         * @language en_US
         */
        /**
         * 已废弃，请参考 {@link #dragonBones.EventObject.SOUND_EVENT}。
         * @deprecated
         * @language zh_CN
         */
        public static SOUND_EVENT: string = EventObject.SOUND_EVENT;
        /**
         * Deprecated, please refer to {@link #dragonBones.EventObject.FRAME_EVENT}.
         * @deprecated
         * @language en_US
         */
        /**
         * 已废弃，请参考 {@link #dragonBones.EventObject.FRAME_EVENT}。
         * @deprecated
         * @language zh_CN
         */
        public static ANIMATION_FRAME_EVENT: string = EventObject.FRAME_EVENT;
        /**
         * Deprecated, please refer to {@link #dragonBones.EventObject.FRAME_EVENT}.
         * @deprecated
         * @language en_US
         */
        /**
         * 已废弃，请参考 {@link #dragonBones.EventObject.FRAME_EVENT}。
         * @deprecated
         * @language zh_CN
         */
        public static BONE_FRAME_EVENT: string = EventObject.FRAME_EVENT;
        /**
         * Deprecated, please refer to {@link #dragonBones.EventObject.FRAME_EVENT}.
         * @deprecated
         * @language en_US
         */
        /**
         * 已废弃，请参考 {@link #dragonBones.EventObject.FRAME_EVENT}。
         * @deprecated
         * @language zh_CN
         */
        public static MOVEMENT_FRAME_EVENT: string = EventObject.FRAME_EVENT;
        /**
         * Deprecated, please refer to {@link #dragonBones.EventObject.SOUND_EVENT}.
         * @deprecated
         * @language en_US
         */
        /**
         * 已废弃，请参考 {@link #dragonBones.EventObject.SOUND_EVENT}。
         * @deprecated
         * @language zh_CN
         */
        public static SOUND: string = EventObject.SOUND_EVENT;
    }
    /**
     * @inheritDoc
     */
    export class EgretArmatureDisplay extends egret.DisplayObjectContainer implements IArmatureProxy {
        private static _cleanBeforeRender(): void { }
        /**
         * @internal
         * @private
         */
        public _batchEnabled: boolean = !__global["nativeRender"]; //
        /**
         * @internal
         * @private
         */
        public _childDirty: boolean = true;
        private _debugDraw: boolean = false;
        private _disposeProxy: boolean = false;
        private _armature: Armature = null as any; //
        private _debugDrawer: egret.Sprite | null = null;
        /**
         * @inheritDoc
         */
        public dbInit(armature: Armature): void {
            this._armature = armature;

            if (this._batchEnabled) {
                this.$renderNode = new egret.sys.GroupNode();
                this.$renderNode.cleanBeforeRender = EgretArmatureDisplay._cleanBeforeRender;
            }
        }
        /**
         * @inheritDoc
         */
        public dbClear(): void {
            this._disposeProxy = false;
            this._armature = null as any;
            this._debugDrawer = null;
        }
        /**
         * @inheritDoc
         */
        public dbUpdate(): void {
            const drawed = DragonBones.debugDraw;
            if (drawed || this._debugDraw) {
                this._debugDraw = drawed;
                if (this._debugDraw) {
                    if (this._debugDrawer === null) {
                        this._debugDrawer = new egret.Sprite();
                    }

                    this.addChild(this._debugDrawer);
                    this._debugDrawer.graphics.clear();

                    for (const bone of this._armature.getBones()) {
                        const boneLength = bone.boneData.length;
                        const startX = bone.globalTransformMatrix.tx;
                        const startY = bone.globalTransformMatrix.ty;
                        const endX = startX + bone.globalTransformMatrix.a * boneLength;
                        const endY = startY + bone.globalTransformMatrix.b * boneLength;

                        this._debugDrawer.graphics.lineStyle(2.0, 0x00FFFF, 0.7);
                        this._debugDrawer.graphics.moveTo(startX, startY);
                        this._debugDrawer.graphics.lineTo(endX, endY);
                        this._debugDrawer.graphics.lineStyle(0.0, 0, 0.0);
                        this._debugDrawer.graphics.beginFill(0x00FFFF, 0.7);
                        this._debugDrawer.graphics.drawCircle(startX, startY, 3.0);
                        this._debugDrawer.graphics.endFill();
                    }

                    for (const slot of this._armature.getSlots()) {
                        const boundingBoxData = slot.boundingBoxData;

                        if (boundingBoxData !== null) {
                            let child = this._debugDrawer.getChildByName(slot.name) as egret.Shape;
                            if (child === null) {
                                child = new egret.Shape();
                                child.name = slot.name;
                                this._debugDrawer.addChild(child);
                            }

                            child.graphics.clear();
                            child.graphics.beginFill(boundingBoxData.color ? boundingBoxData.color : 0xFF00FF, 0.3);

                            switch (boundingBoxData.type) {
                                case BoundingBoxType.Rectangle:
                                    child.graphics.drawRect(-boundingBoxData.width * 0.5, -boundingBoxData.height * 0.5, boundingBoxData.width, boundingBoxData.height);
                                    break;

                                case BoundingBoxType.Ellipse:
                                    child.graphics.drawEllipse(-boundingBoxData.width * 0.5, -boundingBoxData.height * 0.5, boundingBoxData.width, boundingBoxData.height);
                                    break;

                                case BoundingBoxType.Polygon:
                                    const vertices = (boundingBoxData as PolygonBoundingBoxData).vertices;
                                    for (let i = 0; i < vertices.length; i += 2) {
                                        if (i === 0) {
                                            child.graphics.moveTo(vertices[i], vertices[i + 1]);
                                        }
                                        else {
                                            child.graphics.lineTo(vertices[i], vertices[i + 1]);
                                        }
                                    }
                                    break;

                                default:
                                    break;
                            }

                            child.graphics.endFill();
                            slot.updateTransformAndMatrix();
                            slot.updateGlobalTransform();
                            child.$setMatrix((slot.globalTransformMatrix as any) as egret.Matrix, true);
                        }
                        else {
                            const child = this._debugDrawer.getChildByName(slot.name);
                            if (child !== null) {
                                this._debugDrawer.removeChild(child);
                            }
                        }
                    }
                }
                else if (this._debugDrawer !== null && this._debugDrawer.parent === this) {
                    this.removeChild(this._debugDrawer);
                }
            }

            if (!EgretFactory._isV5 && this._batchEnabled && this._childDirty) {
                this.$invalidateContentBounds();
            }
        }
        /**
         * @inheritDoc
         */
        public dispose(disposeProxy: boolean = true): void {
            this._disposeProxy = disposeProxy;

            if (this._armature !== null) {
                this._armature.dispose();
                this._armature = null as any;
            }
        }
        /**
         * @inheritDoc
         */
        public dispatchDBEvent(type: EventStringType, eventObject: EventObject): void {
            const event = egret.Event.create(EgretEvent, type);
            event.data = eventObject;
            super.dispatchEvent(event);
            egret.Event.release(event);
        }
        /**
         * @inheritDoc
         */
        public hasDBEventListener(type: EventStringType): boolean {
            return this.hasEventListener(type);
        }
        /**
         * @inheritDoc
         */
        public addDBEventListener(type: EventStringType, listener: (event: EgretEvent) => void, target: any): void {
            this.addEventListener(type, listener, target);
        }
        /**
         * @inheritDoc
         */
        public removeDBEventListener(type: EventStringType, listener: (event: EgretEvent) => void, target: any): void {
            this.removeEventListener(type, listener, target);
        }
        /**
         * Disable the batch.
         * Batch rendering for performance reasons, the boundary properties of the render object are not updated.
         * This will not correctly obtain the wide-height properties of the rendered object and the transformation properties of its internal display objects,
         * which can turn off batch rendering if you need to use these properties.
         * @version DragonBones 5.1
         * @language en_US
         */
        /**
         * 关闭批次渲染。
         * 批次渲染出于性能考虑，不会更新渲染对象的边界属性。
         * 这样将无法正确获得渲染对象的宽高属性以及其内部显示对象的变换属性，如果需要使用这些属性，可以关闭批次渲染。
         * @version DragonBones 5.1
         * @language zh_CN
         */
        public disableBatch(): void {
            if (!this._batchEnabled || !this._armature) {
                return;
            }

            for (const slot of this._armature.getSlots()) {
                // (slot as EgretSlot).transformUpdateEnabled = true;
                const display = (slot._meshData ? slot.meshDisplay : slot.rawDisplay) as (egret.Mesh | egret.Bitmap);
                const node = display.$renderNode as (egret.sys.BitmapNode | egret.sys.MeshNode);

                // Transform.
                if (node.matrix) {
                    display.$setMatrix(slot.globalTransformMatrix as any, false);
                }

                // ZOrder.
                this.addChild(display);
            }

            this._batchEnabled = false;
            this.$renderNode.cleanBeforeRender = null as any;
            this.$renderNode = null as any;
            this.armature.invalidUpdate(null, true);
        }
        /**
         * @inheritDoc
         */
        public get armature(): Armature {
            return this._armature;
        }
        /**
         * @inheritDoc
         */
        public get animation(): Animation {
            return this._armature.animation;
        }
        /**
         * @inheritDoc
         */
        $measureContentBounds(bounds: egret.Rectangle): void {
            if (this._batchEnabled && this._armature) {
                if (this._childDirty) {
                    this._childDirty = false;

                    let isFirst = true;
                    const helpRectangle = new egret.Rectangle();

                    for (const slot of this._armature.getSlots()) {
                        const display = slot.display;
                        if (!display) {
                            continue;
                        }

                        const matrix = (display.$renderNode as (egret.sys.BitmapNode | egret.sys.MeshNode)).matrix;

                        if (display === slot.meshDisplay) {
                            const vertices = ((display as egret.Mesh).$renderNode as egret.sys.MeshNode).vertices;

                            if (vertices && vertices.length > 0) {
                                helpRectangle.setTo(999999.0, 999999.0, -999999.0, -999999.0);

                                for (let i = 0, l = vertices.length; i < l; i += 2) {
                                    const x = vertices[i];
                                    const y = vertices[i + 1];
                                    if (helpRectangle.x > x) helpRectangle.x = x;
                                    if (helpRectangle.width < x) helpRectangle.width = x;
                                    if (helpRectangle.y > y) helpRectangle.y = y;
                                    if (helpRectangle.height < y) helpRectangle.height = y;
                                }
                                helpRectangle.width -= helpRectangle.x;
                                helpRectangle.height -= helpRectangle.y;
                            }
                            else {
                                continue;
                            }
                        }
                        else {
                            const displayData = slot._displayDatas[slot.displayIndex];
                            if (displayData && displayData instanceof ImageDisplayData && displayData.texture) {
                                const scale = displayData.texture.parent.scale;
                                helpRectangle.x = 0;
                                helpRectangle.y = 0;
                                helpRectangle.width = displayData.texture.region.width * scale;
                                helpRectangle.height = displayData.texture.region.height * scale;
                            }
                            else {
                                continue;
                            }
                        }

                        matrix.$transformBounds(helpRectangle);

                        const left = helpRectangle.x;
                        const top = helpRectangle.y;
                        const right = helpRectangle.x + helpRectangle.width;
                        const bottom = helpRectangle.y + helpRectangle.height;

                        if (isFirst) {
                            isFirst = false;
                            bounds.x = left;
                            bounds.y = top;
                            bounds.width = right;
                            bounds.height = bottom;
                        }
                        else {
                            if (left < bounds.x) {
                                bounds.x = left;
                            }

                            if (top < bounds.y) {
                                bounds.y = top;
                            }

                            if (right > bounds.width) {
                                bounds.width = right;
                            }

                            if (bottom > bounds.height) {
                                bounds.height = bottom;
                            }
                        }
                    }

                    bounds.width -= bounds.x;
                    bounds.height -= bounds.y;
                }

                return;
            }

            super.$measureContentBounds(bounds);
        }

        /**
         * @inheritDoc
         */
        public hasEvent(type: EventStringType): boolean {
            return this.hasDBEventListener(type);
        }
        /**
         * @inheritDoc
         */
        public addEvent(type: EventStringType, listener: (event: EgretEvent) => void, target: any): void {
            this.addDBEventListener(type, listener, target);
        }
        /**
         * @inheritDoc
         */
        public removeEvent(type: EventStringType, listener: (event: EgretEvent) => void, target: any): void {
            this.removeDBEventListener(type, listener, target);
        }
        /**
         * Deprecated, please refer to {@link dragonBones.Armature#clock} {@link dragonBones.BaseFactory#clock}.
         * @deprecated
         * @language en_US
         */
        /**
         * 已废弃，请参考 {@link dragonBones.Armature#clock} {@link dragonBones.BaseFactory#clock}。
         * @deprecated
         * @language zh_CN
         */
        public advanceTimeBySelf(on: boolean): void {
            if (on) {
                this._armature.clock = EgretFactory.factory.clock;
            }
            else {
                this._armature.clock = null;
            }
        }
    }

    /**
     * 已废弃，请参考 {@link dragonBones.Armature}。
     * @deprecated
     * @language zh_CN
     */
    export type FastArmature = Armature;
    /**
     * 已废弃，请参考 {@link dragonBones.Bone}。
     * @deprecated
     * @language zh_CN
     */
    export type FastBone = Bone;
    /**
     * 已废弃，请参考 {@link dragonBones.Slot}。
     * @deprecated
     * @language zh_CN
     */
    export type FastSlot = Slot;
    /**
     * 已废弃，请参考 {@link dragonBones.Animation}。
     * @deprecated
     * @language zh_CN
     */
    export type FastAnimation = Animation;
    /**
     * 已废弃，请参考 {@link dragonBones.AnimationState}。
     * @deprecated
     * @language zh_CN
     */
    export type FastAnimationState = AnimationState;
    /**
     * 已废弃，请参考 {@link dragonBones.EgretEvent}。
     * @deprecated
     * @language zh_CN
     */
    export class Event extends EgretEvent { }
    /**
     * 已废弃，请参考 {@link dragonBones.EgretEvent}。
     * @deprecated
     * @language zh_CN
     */
    export class ArmatureEvent extends EgretEvent { }
    /**
     * 已废弃，请参考 {@link dragonBones.EgretEvent}。
     * @deprecated
     * @language zh_CN
     */
    export class AnimationEvent extends EgretEvent { }
    /**
     * 已废弃，请参考 {@link dragonBones.EgretEvent}。
     * @deprecated
     * @language zh_CN
     */
    export class FrameEvent extends EgretEvent { }
    /**
     * 已废弃，请参考 {@link dragonBones.EgretEvent}。
     * @deprecated
     * @language zh_CN
     */
    export class SoundEvent extends EgretEvent { }
    /**
     * 已废弃，请参考 {@link dragonBones.BaseFacory#parseTextureAtlasData()}。
     * @deprecated
     * @language zh_CN
     */
    export class EgretTextureAtlas extends EgretTextureAtlasData {
        public static toString(): string {
            return "[class dragonBones.EgretTextureAtlas]";
        }
        /**
         * 已废弃，请参考 {@link dragonBones.BaseFacory#parseTextureAtlasData()}。
         * @deprecated
         * @language zh_CN
         */
        public constructor(texture: egret.Texture, rawData: any, scale: number = 1) {
            super();
            console.warn("已废弃");

            this._onClear();

            ObjectDataParser.getInstance().parseTextureAtlasData(rawData, this, scale);
            this.renderTexture = texture;
        }
    }
    /**
     * 已废弃，请参考 {@link dragonBones.BaseFacory#parseTextureAtlasData()}。
     * @deprecated
     * @language zh_CN
     */
    export class EgretSheetAtlas extends EgretTextureAtlas {
    }
    /**
     * 已废弃，请参考 {@link dragonBones.EgretFactory#soundEventManager}。
     * @deprecated
     * @language zh_CN
     */
    export class SoundEventManager {
        /**
         * 已废弃，请参考 {@link dragonBones.EgretFactory#soundEventManager}。
         * @deprecated
         * @language zh_CN
         */
        public static getInstance(): EgretArmatureDisplay {
            console.warn("已废弃");
            return EgretFactory.factory.soundEventManager;
        }
    }
    /**
     * 已废弃，请参考 {@link dragonBones.Armature#cacheFrameRate}。
     * @deprecated
     * @language zh_CN
     */
    export class AnimationCacheManager {
        /**
         * 已废弃，请参考 {@link dragonBones.Armature#cacheFrameRate}。
         * @deprecated
         * @language zh_CN
         */
        public constructor() {
            console.warn("已废弃");
        }
    }
}