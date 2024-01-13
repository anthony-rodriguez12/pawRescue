import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/shared/services/login.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard {
  constructor(
    private authService: LoginService,
    private router: Router,
    private snackbar: SnackbarService,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/admin/panel']);
      this.snackbar.warning(
        '¡Aviso!',
        '¡Hola! Parece que ya tienes una sesión activa',
      );
      return false;
    } else {
      return true;
    }
  }
}
