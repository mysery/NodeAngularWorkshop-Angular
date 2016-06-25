export class HorizontalListController {
    //columns = [];

    constructor ($scope, $element, $attrs) {
        //this.columns = $attrs.columns
        //.split(/\s*,\s*/).map(item => item.split(/\s*:\s*/));
    }
}


export const HorizontalListComponent = {
    templateUrl: '/components/app/views/horizontal-list.html',
    controller: HorizontalListController,
    controllerAs: '$ctrl',
    bindings: {
        data: '=',
        type: '@',
    }
}
