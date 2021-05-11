export type VideoComposition = {
  videos: Array<{ type: "clip"; clipId: string }>;
};
export type GetVideoCompositionFn = () => VideoComposition;

export type InvitationPreviewGeneratorFn = (opts: object) => void;

export type CustomDataDescriptor = { key: string };
export type GetCustomDataDescriptorsFn = () => CustomDataDescriptor[];

type ImageData = {
  path?: string;
  height?: number;
  width?: number;
  link?: string;
};

export type SiteData = {
  customCssKey?: string;
  meta?: {
    title?: string;
    description?: string;
  };
  icon?: ImageData;
  logo?: ImageData;
  introScreen?: {
    recordButtonLabel?: string;
  };
  nameScreen?: {
    nameLabel?: string;
    titleUploading?: string;
    titleHitSave?: string;
    instructions?: string;
    editButtonLabel?: string;
    saveButtonLabel?: string;
  };
  successScreen?: {
    markup?: `<p class="mt-16 mb-8 mx-3 text-center">Nice work! Your video request for <span class="whitespace-nowrap"><b>INVITATION_DISPLAY_NAME</b> was sent.</span></p><div class="self-center"><a href="https://rushtix.com"><img src="THEME_FILE_ROOT/logo-rushtix.png" width="220" height="39" /></a></div><p class="my-8 mx-3 text-center">You'll receive your shoutout video from <b>INVITATION_DISPLAY_NAME</b> via email when <span class="whitespace-nowrap">it's ready.</span></p>`;
  };
};

export type SiteDataGetterFn = () => Promise<SiteData>;

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

export enum VideoSource {
  Clip = "clip",
  Theme = "theme",
}

interface VideoThemeElement extends IThemeElement<"video", VideoProps> {
  videoKey: string;
  source: VideoSource;
}

interface TextThemeElement extends IThemeElement<"text", TextProps> {
  fontKey?: string;
}

type ImageProps = {
  alpha?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  imageKey: string;
};

export enum TextAlign {
  Left = "left",
  Center = "center",
  Right = "right",
}
export enum OriginY {
  Top = "top",
  Center = "center",
  Bottom = "bottom",
}

interface ImageThemeElement extends IThemeElement<"image", ImageProps> {}

type TextProps = {
  value: string;
  fontSize: number;
  lineHeight?: number;
  fontName: string;
  textAlign: TextAlign;
  originY?: OriginY;
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
