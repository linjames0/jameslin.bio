import PhotoViewer from "../../../components/PhotoViewer";
import { series } from "../series";

export const metadata = { title: "Documentary — James Lin" };

export default function Documentary() {
    return (
        <div data-page="photography">
            <PhotoViewer photos={series.documentary} />
        </div>
    );
}
