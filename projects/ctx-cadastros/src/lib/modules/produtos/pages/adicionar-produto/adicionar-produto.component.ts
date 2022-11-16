import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FormGroup, FormControl } from '@angular/forms';

import { ProdutosService } from 'projects/api/src/lib/modules/produtos/produtos.service';
import { AdicionarProdutoRequest } from 'projects/api/src/lib/modules/produtos/models/requests/adicionar-produto-request';

@Component({
    selector: 'ctx-cadastros-produtos-adicionar',
    templateUrl: './adicionar-produto.component.html',
})
export class AdicionarProdutoComponent {
    ptBR: any;
    request: AdicionarProdutoRequest = {
        nome: '',
    };

    form = new FormGroup({
        nome: new FormControl(''),
        setor: new FormControl(''),
    });

    constructor(
        protected messageService: MessageService,
        protected formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private service: ProdutosService
    ) {}

    onClickSalvar() {
        var f = this.form.controls;

        this.request = {
            nome: f.nome.value,
        };

        this.service.adicionar(this.request).subscribe(
            async (res) => console.log(res),
            (error) => console.warn(error)
        );
    }

    async onClickVoltar() {
        await this.router.navigate(['../listar'], { relativeTo: this.route });
    }
}
