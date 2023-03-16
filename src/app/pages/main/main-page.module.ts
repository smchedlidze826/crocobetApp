import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { HttpClientModule } from "@angular/common/http";

import { MatIconModule } from "@angular/material/icon";

import { AuthorizationHeaderComponent } from "src/app/features/authorization-header/authorization-header.component";
import { CollectionComponent } from "src/app/features/collection/collection.component";
import { CollectionHolderComponent } from "src/app/features/collection/collection-holder/collection-holder.component";
import { HeaderComponent } from "src/app/features/header/header.component";
import { MainSliderComponent } from "src/app/features/main-slider/main-slider.component";
import { MenuBarComponent } from "src/app/features/menu-bar/menu-bar.component";
import { MainPageComponent } from "./main-page.component";
import { CategoriesCollectionComponent } from "src/app/features/header/categories-collection/categories-collection.component";
import { SlotsService } from "src/app/core/services/slots/slots.service";
import { CategoriesCollectionHolderComponent } from "src/app/features/header/categories-collection/categories-collection-holder/categories-collection-holder.component";


@NgModule({
    declarations: [
        MenuBarComponent,
        MainSliderComponent,
        MainPageComponent,
        HeaderComponent,
        CollectionComponent,
        AuthorizationHeaderComponent,
        CategoriesCollectionComponent,
        CategoriesCollectionHolderComponent,
        CollectionHolderComponent,
    ],
    imports: [
        CommonModule,
        TranslateModule,
        HttpClientModule,
        MatIconModule,
        RouterModule.forChild([{ path: '', component: MainPageComponent }]),
    ],
    providers:[SlotsService]
})
export class MainPageModule { }