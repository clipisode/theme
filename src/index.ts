export type VideoComposition = {
  videos: Array<{ type: "clip"; clipId: string }>;
};
export type GetVideoCompositionFn = () => VideoComposition;

export type InvitationPreviewGeneratorFn = (opts: object) => void;

export type CustomDataDescriptor = { key: string };
export type GetCustomDataDescriptorsFn = () => CustomDataDescriptor[];

interface Animation<
  TProps extends Record<string, any>,
  TField extends keyof TProps
> {
  startAt: number;
  endAt: number;
  field: TField;
  from: TProps[TField];
  to: TProps[TField];
}

interface IThemeElement<
  Type extends string,
  TProps extends Record<string, any>
> {
  type: Type;
  name: string;
  startAt: number;
  endAt: number;
  props: TProps;
  animations?: Animation<TProps, any>[];
}

type RectangleProps = {
  color?: string;
  alpha?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
};

interface RectangleThemeElement extends IThemeElement<"rect", RectangleProps> {}

type GradientProps = {
  alpha?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
};

interface GradientThemeElement
  extends IThemeElement<"gradient", GradientProps> {}

type VideoProps = {
  alpha?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
};

interface VideoThemeElement extends IThemeElement<"video", VideoProps> {
  videoKey: string;
  source: "clip" | "theme";
}

interface TextThemeElement extends IThemeElement<"text", TextProps> {}

type ImageProps = {
  alpha?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
};

interface ImageThemeElement extends IThemeElement<"image", ImageProps> {
  imageKey: string;
}

type TextProps = {
  value: string;
  fontSize: number;
  lineHeight: number;
  fontName: string;
  textAlign: "center" | "left" | "right";
  color: string;
  alpha?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
};

type FrameProps = {
  alpha?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  videoKey: string;
  position: "first" | "last";
};

interface FrameThemeElement extends IThemeElement<"frame", FrameProps> {}

export type ThemeElement =
  | RectangleThemeElement
  | GradientThemeElement
  | VideoThemeElement
  | FrameThemeElement
  | TextThemeElement
  | ImageThemeElement;

type AnswerData = {
  id: string;
  ask: {
    id: string;
    title: string;
    host: {
      id: string;
      promoText: string | null;
    } | null;
  };
  clip: {
    id: string;
    duration: number;
    displayName: string;
  };
  reply: {
    id: string;
    clip: {
      id: string;
      duration: number;
      displayName: string;
    };
  };
};

export type GetElementsFn = (answer: AnswerData) => Array<ThemeElement>;
