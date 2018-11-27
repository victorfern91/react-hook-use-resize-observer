import { useLayoutEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";

const DIMENSIONS = {
    SMALL: "sm",
    MEDIUM: "md",
    LARGE: "lg",
    EXTRA_LARGE: "xl"
}

/**
 * @param {object} ref
 * @param {object} [dimensions]
 */
export default function useResizeObservable(ref, dimensions = { sm: 540, md: 720, lg: 960 }) {
    const [dimensionClassname, setDimensionClassname ] = useState(DIMENSIONS.SMALL);
    const [componentWidth, setComponentWidth ] = useState(0);

    const resizeObserver = new ResizeObserver(entries => handleResize(entries[0]));

    function handleResize(entry) {
        const componentWidth = entry.target.clientWidth;
        let componentDimension = DIMENSIONS.SMALL;

        if (componentWidth <= dimesions.sm) {
            componentDimension = DIMENSIONS.SMALL;
        } else if (componentWidth > dimesions.sm && componentWidth <= dimesions.md) {
            componentDimension = DIMENSIONS.MEDIUM;
        } else if (componentWidth > dimesions.md && componentWidth <= dimesions.lg) {
            componentDimension = DIMENSIONS.LARGE;
        } else {
            componentDimension = DIMENSIONS.EXTRA_LARGE;
        }

        // Sets the component
        setDimensionClassname(componentDimension);
        setComponentWidth(componentWidth);
    }

    useLayoutEffect(() => {
        resizeObserver.observe(ref.current);

        return () => resizeObserver.unobserve(ref.current);
    }, [componentWidth]);
}
