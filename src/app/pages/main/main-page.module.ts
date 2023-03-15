import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { AuthorizationHeaderComponent } from "src/app/features/authorization-header/authorization-header.component";
import { CollectionComponent } from "src/app/features/collection/collection.component";
import { HeaderComponent } from "src/app/features/header/header.component";
import { MainSliderComponent } from "src/app/features/main-slider/main-slider.component";
import { MenuBarComponent } from "src/app/features/menu-bar/menu-bar.component";
import { MainPageComponent } from "./main-page.component";

@NgModule({
    declarations: [
        MenuBarComponent,
        MainSliderComponent,
        MainPageComponent,
        HeaderComponent,
        CollectionComponent,
        AuthorizationHeaderComponent,
    ],
    imports: [
        CommonModule,
        TranslateModule,
        RouterModule.forChild([{ path: '', component: MainPageComponent }]),
    ],
    exports: [],
})
export class MainPageModule { }