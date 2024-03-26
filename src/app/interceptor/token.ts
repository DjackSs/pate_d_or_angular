import { HttpInterceptorFn  } from "@angular/common/http";

export const tokenInterceptor: HttpInterceptorFn = (req, next) => 
{
    // On ajoute des headers à la requête
    //const storageService: StorageService = inject(StorageService);
    //const token = storageService.getToken()

    //a suprimer
    const token = "12345AZERT";
  
    const clone = req.clone
    ({
      setHeaders: 
      {
        'token': token
      }
    });
  
    return next(clone);
  };
  