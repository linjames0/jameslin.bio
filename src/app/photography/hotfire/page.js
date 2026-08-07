import PhotoViewer from "../../../components/PhotoViewer";
import { series } from "../series";

export const metadata = { title: "Hotfire — James Lin" };

export default function Hotfire() {
    return (
        <div data-page="photography">
            <PhotoViewer photos={series.hotfire} />
        </div>
    );
}
