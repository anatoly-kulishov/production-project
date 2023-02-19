import {TMode} from "./classNames.declarations";

export const classNames = (cls: string, mods: TMode, additional: string[]): string => {
    return [
        cls,
        ...additional,
        Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className, _]) => className)
    ]
        .join(' ')
}

classNames('remove-btn', {hovered: true, selectable: true, red: false}, ['pdg']);