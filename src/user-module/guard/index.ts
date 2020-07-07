
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    // roles validation 
    // 
    return this.validateRequest(request);
  }
  public validateRequest(req): Promise<any> | any | Observable<any> {
      return Promise.resolve(Boolean);
  }
}