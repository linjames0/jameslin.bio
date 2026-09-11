import PhotoViewer from "../../../components/PhotoViewer";
import { series } from "../series";

export const metadata = { title: "New York — James Lin" };

export default function NewYork() {
    return (
        <div data-page="photography">
            <PhotoViewer photos={series.newYork} />
        </div>
    );
}
