import PhotoViewer from "../../../components/PhotoViewer";
import { series } from "../series";

export const metadata = { title: "Origins — James Lin" };

export default function Origins() {
    return (
        <div data-page="photography">
            <PhotoViewer photos={series.origins} />
        </div>
    );
}
