export type VideoComposition = {
  videos: Array<{ type: "clip"; clipId: string }>;
};
export type GetVideoCompositionFn = () => VideoComposition;

export type InvitationPreviewGeneratorFn = (opts: object) => void;

export type CustomDataDescriptor = { key: string };
export type GetCustomDataDescriptorsFn = () => CustomDataDescriptor[];
