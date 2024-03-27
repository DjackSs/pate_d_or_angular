import { HttpInterceptorFn  } from "@angular/common/http";
import { StorageService } from "../services/storage.service";
import { inject } from '@angular/core';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => 
{
    // On ajoute des headers à la requête
    const storageService: StorageService = inject(StorageService);

    const token = storageService.get("token");

    if(token)
    {
        const clone = req.clone
        ({
            setHeaders: 
            {
                'token': token
            }
        });

        return next(clone);

    }
    else
    {

        return next(req);

    } 



  };
  