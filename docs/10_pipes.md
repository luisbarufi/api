# Pipes

No Nest os Pipes são classes com o decorator `@Injectable()` e devem implementar a interface `PipeTransform`.

A interface `PipeTransform` por sua vez irá obrigar a declaração do método `transform` que receberá o valor que passará pelo “tubo” e opcionalmente dados extras.

Os Pipes normalmente são usados para transformar os dados que passam por eles ou para validá-los.

# Built-in Pipes

O Nest já disponibiliza alguns pipes padrão pronto para serem usados. São eles:

- ValidationPipe  
- ParseIntPipe  
- ParseFloatPipe  
- ParseBoolPipe  
- ParseArrayPipe  
- ParseUUIDPipe  
- ParseEnumPipe  
- DefaultValuePipe  
- ParseFilePipe  
