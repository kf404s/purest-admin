import { ReVxeGrid } from '#/components/grid';
import { ReModal } from '#/components/modal';
import { ReDictionary } from '#/components/dictionary';
import { ReMap } from '#/components/map';

declare module 'vue' {
  export interface GlobalComponents {
    ReVxeGrid: typeof ReVxeGrid;
    ReModal: typeof ReModal;
    ReDictionary: typeof ReDictionary;
    ReMap: typeof ReMap;
  }
}

export {};
