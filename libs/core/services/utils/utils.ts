import { Injectable } from '@angular/core';

import { imagesConfiguration } from './../../environments/image-configuration';
import { Media } from './../../models';

@Injectable()
export class UtilsProvider {

    constructor() { }

    title(item: Media): string {
        return ((item.title) ? item.title : item.name);
    }
    posterImage(poster_path: string, size: string = 'w92'): string {
        const sizeImage = imagesConfiguration.poster_sizes[size];
        if (!poster_path) {
            return 'assets/images/default-image.png';
        }
        return `${imagesConfiguration.secure_base_url}${sizeImage}${poster_path}`;
    }

    backdropImage(backdrop_path: string, size: string = 'w300'): string {
        const sizeImage = imagesConfiguration.backdrop_sizes[size];
        if (!backdrop_path) {
            return 'assets/images/default-image.png';
        }
        return `${imagesConfiguration.secure_base_url}${sizeImage}${backdrop_path}`;
    }

    profileImage(profile_sizes: string, size: string = 'w185'): string {
        const sizeImage = imagesConfiguration.profile_sizes[size];
        if (!profile_sizes) {
            return 'assets/images/default-image.png';
        }
        return `${imagesConfiguration.secure_base_url}${sizeImage}${profile_sizes}`;
    }


    //   convertMinutesToTime(duration: string): string {
    //       let minutes = parseInt(duration, 10);

    //     let seconds = (duration / 1000) % 60;
    //     // const minutesx = parseInt((duration / (1000 * 60)) % 60, 10);

    //     // seconds = (seconds < 10) ? `0${seconds}` : seconds;

    //     // return `${minutes}:${seconds}`;

    //     // let min = parseInt(minutes);
    //     // let hours = Math.floor(min / 60);
    //     // let remainingMinutes = min % 60;
    //     // return hours + ":" + remainingMinutes;
    //   }

    convertMinutesToTime(time: string): string {
        const timeConvert = parseInt(time, 10);
        const seconds = (timeConvert / 1000) % 60;
        const minutes = (timeConvert / (1000 * 60)) % 60;

        const secondsTotal = (seconds < 10) ? `0${seconds}` : seconds;

        return `${minutes}:${secondsTotal}`;
    }

}
