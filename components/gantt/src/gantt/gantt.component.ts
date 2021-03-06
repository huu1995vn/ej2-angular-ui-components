import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Gantt } from '@syncfusion/ej2-gantt';
import { Template } from '@syncfusion/ej2-angular-base';
import { ColumnsDirective } from './columns.directive';
import { AddDialogFieldsDirective } from './adddialogfields.directive';
import { EditDialogFieldsDirective } from './editdialogfields.directive';
import { DayWorkingTimeCollectionDirective } from './dayworkingtime.directive';
import { HolidaysDirective } from './holidays.directive';
import { EventMarkersDirective } from './eventmarkers.directive';

export const inputs: string[] = ['addDialogFields','allowExcelExport','allowFiltering','allowKeyboard','allowPdfExport','allowReordering','allowResizing','allowRowDragAndDrop','allowSelection','allowSorting','allowUnscheduledTasks','autoFocusTasks','baselineColor','collapseAllParentTasks','columnMenuItems','columns','connectorLineBackground','connectorLineWidth','contextMenuItems','dataSource','dateFormat','dayWorkingTime','disableHtmlEncode','durationUnit','editDialogFields','editSettings','enableContextMenu','enableMultiTaskbar','enablePersistence','enablePredecessorValidation','enableRtl','enableVirtualization','eventMarkers','filterSettings','gridLines','height','highlightWeekends','holidays','includeWeekend','labelSettings','locale','milestoneTemplate','parentTaskbarTemplate','projectEndDate','projectStartDate','query','readOnly','renderBaseline','resourceFields','resourceIDMapping','resourceNameMapping','resources','rowHeight','searchSettings','segmentData','selectedRowIndex','selectionSettings','showColumnMenu','showInlineNotes','showOverAllocation','sortSettings','splitterSettings','taskFields','taskMode','taskType','taskbarHeight','taskbarTemplate','timelineSettings','timezone','toolbar','tooltipSettings','treeColumnIndex','validateManualTasksOnLinking','viewType','width','workUnit','workWeek'];
export const outputs: string[] = ['actionBegin','actionComplete','actionFailure','beforeExcelExport','beforePdfExport','beforeTooltipRender','cellDeselected','cellDeselecting','cellEdit','cellSelected','cellSelecting','collapsed','collapsing','columnDrag','columnDragStart','columnDrop','columnMenuClick','columnMenuOpen','contextMenuClick','contextMenuOpen','created','dataBound','destroyed','endEdit','excelExportComplete','excelHeaderQueryCellInfo','excelQueryCellInfo','expanded','expanding','headerCellInfo','load','onMouseMove','onTaskbarClick','pdfColumnHeaderQueryCellInfo','pdfExportComplete','pdfQueryCellInfo','pdfQueryTaskbarInfo','pdfQueryTimelineCellInfo','queryCellInfo','queryTaskbarInfo','recordDoubleClick','resizeStart','resizeStop','resizing','rowDataBound','rowDeselected','rowDeselecting','rowDrag','rowDragStart','rowDragStartHelper','rowDrop','rowSelected','rowSelecting','splitterResizeStart','splitterResized','splitterResizing','taskbarEdited','taskbarEditing','toolbarClick','dataSourceChange'];
export const twoWays: string[] = ['dataSource'];

/**
 * `ejs-gantt` represents the Angular Gantt Component.
 * ```html
 * <ejs-gantt [dataSource]='data' allowSelection='true' allowSorting='true'></ejs-gantt>
 * ```
 */
@Component({
    selector: 'ejs-gantt',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childColumns: new ContentChild(ColumnsDirective), 
        childAddDialogFields: new ContentChild(AddDialogFieldsDirective), 
        childEditDialogFields: new ContentChild(EditDialogFieldsDirective), 
        childDayWorkingTime: new ContentChild(DayWorkingTimeCollectionDirective), 
        childHolidays: new ContentChild(HolidaysDirective), 
        childEventMarkers: new ContentChild(EventMarkersDirective)
    }
})
@ComponentMixins([ComponentBase])
export class GanttComponent extends Gantt implements IComponentBase {
    public context : any;
    public tagObjects: any;
    public childColumns: QueryList<ColumnsDirective>;
    public childAddDialogFields: QueryList<AddDialogFieldsDirective>;
    public childEditDialogFields: QueryList<EditDialogFieldsDirective>;
    public childDayWorkingTime: QueryList<DayWorkingTimeCollectionDirective>;
    public childHolidays: QueryList<HolidaysDirective>;
    public childEventMarkers: QueryList<EventMarkersDirective>;
    public tags: string[] = ['columns', 'addDialogFields', 'editDialogFields', 'dayWorkingTime', 'holidays', 'eventMarkers'];
    public dataSourceChange: any;
    /** 
     * The parent task bar template that renders customized parent task bars from the given template.
     * @default null
     */
    @ContentChild('parentTaskbarTemplate')
    @Template()
    public parentTaskbarTemplate: any;
    /** 
     * The milestone template that renders customized milestone task from the given template.
     * @default null
     */
    @ContentChild('milestoneTemplate')
    @Template()
    public milestoneTemplate: any;
    /** 
     * The task bar template that renders customized child task bars from the given template.
     * @default null
     */
    @ContentChild('taskbarTemplate')
    @Template()
    public taskbarTemplate: any;
    @ContentChild('labelSettingsRightLabel')
    @Template()
    public labelSettings_rightLabel: any;
    @ContentChild('labelSettingsLeftLabel')
    @Template()
    public labelSettings_leftLabel: any;
    @ContentChild('labelSettingsTaskLabel')
    @Template()
    public labelSettings_taskLabel: any;
    @ContentChild('tooltipSettingsTaskbar')
    @Template()
    public tooltipSettings_taskbar: any;
    @ContentChild('tooltipSettingsBaseline')
    @Template()
    public tooltipSettings_baseline: any;
    @ContentChild('tooltipSettingsConnectorLine')
    @Template()
    public tooltipSettings_connectorLine: any;
    @ContentChild('tooltipSettingsEditing')
    @Template()
    public tooltipSettings_editing: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('GanttFilter');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GanttSelection');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GanttSort');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GanttReorder');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GanttResize');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GanttEdit');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GanttDayMarkers');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GanttToolbar');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GanttContextMenu');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GanttExcelExport');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GanttRowDD');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GanttColumnMenu');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GanttPdfExport');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('GanttVirtualScroll');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context  = new ComponentBase();
    }

    public ngOnInit() {
        this.context.ngOnInit(this);
    }

    public ngAfterViewInit(): void {
        this.context.ngAfterViewInit(this);
    }

    public ngOnDestroy(): void {
        this.context.ngOnDestroy(this);
    }

    public ngAfterContentChecked(): void {
        this.tagObjects[0].instance = this.childColumns;
        
	    if (this.childAddDialogFields) {
            this.tagObjects[1].instance = this.childAddDialogFields;
        }
        
	    if (this.childEditDialogFields) {
            this.tagObjects[2].instance = this.childEditDialogFields;
        }
        
	    if (this.childDayWorkingTime) {
            this.tagObjects[3].instance = this.childDayWorkingTime;
        }
        
	    if (this.childHolidays) {
            this.tagObjects[4].instance = this.childHolidays;
        }
        
	    if (this.childEventMarkers) {
            this.tagObjects[5].instance = this.childEventMarkers;
        }
        this.context.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

