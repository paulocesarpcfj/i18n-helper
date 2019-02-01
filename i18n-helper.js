(function () {
    'use strict';

    /* eslint max-len: ["error", 1200] */

    const translations = {
        'en-US': {
            general: {
                refresh: 'Refresh',
                selectField: 'Select',
                noStaffSelected: 'No staff selected.',
                warningLeaveMessage: 'Are you sure you want to leave this page? \n \n' +
                    'Changes you made may not be saved.',
                portalPageTitle: 'Audit Portal',
                pageTitle: 'Manage Audit Universe',
                submitFailed: 'An error occurred when saving the object. Make sure the fields were completed correctly.',
                error: 'An unexpected error occurred. Please contact the system administrator.',
                noConnection: 'Unable to connect to server. Please contact the system administrator.',
                moduleName: 'Audit Universe',
                search: 'Search',
                required: 'This field is required.',
                accessDenied: 'You do not have permission to perform this operation.',
                noData: 'No results were found.',
                notFound: 'Object not found.',
                notAuthorized: 'Access not authorized.',
                presentationMode: 'Press ESC to exit full screen.',
                showMore: 'Show more...',
                fetchError: 'An unexpected error occurred. Status Code: %{status}',
            },
            pagination: {
                firstQuestion: 'First Question',
                prevQuestion: 'Previous Question',
                nextQuestion: 'Next Question',
                lastQuestion: 'Last Question',
                showingFilteredResults: 'Showing %{start}–%{end} of %{totalFiltered} results filtered from %{total}',
                page: 'Page',
                firstPage: 'First Page',
                prevPage: 'Previous Page',
                nextPage: 'Next Page',
                lastPage: 'Last Page',
                showingResults: 'Showing %{start}–%{end} of %{total} results',
                of: 'of',
            },
            filters: {
                sortBy: 'Sort by:',
                filterBy: 'Filter by:',
                clearFilters: 'Clear Filter',
                inProgress: 'In Progress',
                notStarted: 'Not Started',
                blocked: 'Blocked',
                answered: 'Answered',
                deadline: 'Deadline',
                subject: 'Subject',
            },
            prompt: {
                save: 'Save',
                cancel: 'Cancel',
                back: 'Back',
            },
            combo: {
                createNewOption: 'Create New Option',
                select: 'Start typing to select',
                clearAll: 'Remove all',
                clear: 'Remove',
                noResults: 'No results were found',
                loading: 'Loading...',
                showMore: 'Show more',
            },
            buttons: {
                close: 'Close',
                closeEngagement: 'Close Engagement',
                approve: 'Approve',
                suspend: 'Suspend',
                resume: 'Resume',
                reject: 'Reject',
                reevaluate: 'Reevaluate',
                import: 'Import',
                submitQuestionnaire: 'Submit Response',
                answer: 'Answer',
                notify: 'Notify',
                saveAndNotifyAuditee: 'Save and Notify Auditee',
                send: 'Send',
                create: 'Create',
                add: 'Add',
                save: 'Save',
                saveAndNext: 'Save & Next',
                cancel: 'Cancel',
                disassociate: 'Disassociate',
                remove: 'Delete',
                resendQuestion: 'Resend Question',
            },
            validations: {
                required: 'This field is required.',
                minLength: 'This field accepts a minimum of %{rule} characters.',
                maxLength: 'This field accepts a maximum of %{rule} characters.',
                minValue: 'The value must be greater than %{rule}.',
                maxValue: 'The value must be less than %{rule}.',
                maxDecimals: 'The field accepts a maximum of %{rule} decimal places.',
                zeroDecimals: 'This field does not accept decimal places.',
                maxFileSize: 'The file must be less than %{rule} MB.',
                minFileSize: 'The file size must be at least %{rule} byte.',
                fileTypes: 'The file must be one of the following types: %{rule}.',
                maxFiles: 'This field accepts a maximum of %{rule} files.',
                validateVersion: 'The new version number must be greater than the current version.',
                sanitize: 'This field cannot contain HTML.',
                invalidEmail: 'This is not a valid e-mail address.',
            },
            riskUnknown: {
                editSuccess: 'The risk was saved.',
                notFound: 'The risk was not found.',
                submitSuccess: 'The risk was saved.',
            },
            presetOptions: {
                presets: 'Use Predefined Response Options',
                select: 'Select an option',
                maturity: {
                    title: 'Maturity',
                    nonExistent: 'Nonexistent/Unknown (Nonexistent)',
                    insufficient: 'Insufficient/Inadequate (Initial)',
                    intuitive: 'Intuitive/Identified (Replicable)',
                    estabilished: 'Established/ Standardized (Defined)',
                    monitored: 'Monitored/Controlled (Managed)',
                    integrated: 'Integrated/Automated (Optimized)',
                },
                criticality: {
                    title: 'Criticality',
                    nonExistent: 'Nonexistent',
                    minor: 'Minor',
                    significant: 'Significant',
                    critical: 'Critical',
                },
                confirmation: {
                    title: 'Confirmation',
                    compliant: 'Compliant',
                    notCompliant: 'Not Compliant',
                    nonApplicable: 'Not Applicable',
                },
                simple: {
                    title: 'Simple',
                    yes: 'Yes',
                    no: 'No',
                    idk: 'I don\'t know',
                },
            },
            tabs: {
                staff: 'Staff',
                timesheet: 'Timesheets',
                questionnaire: 'Questionnaire',
                planning: 'Planning',
                general: 'General',
                workingPapers: 'Working Papers',
            },
            staff: {
                pageTitle: 'Manage Audit Resources',
                table: {
                    name: 'Person',
                    duty: 'Position',
                    region: 'Region',
                    skill: 'Skills',
                    certification: 'Certifications',
                    createdBy: 'Created By',
                    dateCreated: 'Date Created',
                    lastUpdate: 'Date Updated',
                },
                form: {
                    submitStaffMemberSuccess: 'The staff member was saved.',
                    createStaffMember: 'Add Staff Member',
                    person: 'Person',
                    duty: 'Position',
                    region: 'Region',
                    skills: 'Skills',
                    certifications: 'Certifications',
                },
                edit: {
                    title: 'Edit Staff Member',
                },
                delete: {
                    notFound: 'Your request could not be performed. Make sure that you have the required permissions and that the staff member has not been deleted.',
                    successStaffMemberRemove: 'The staff member was deleted.',
                    title: 'Delete Staff Member',
                    subTitle: 'Are you sure you want to delete this staff member?',
                    description: 'The person will lose access to the Audit module and will no longer be available for association with Audit objects. ' +
                        'The tag (deleted) will be displayed next to the person\'s name in currently associated objects.',
                },
            },
            timesheets: {
                pageTitle: 'Manage Audit Resources',
                edit: {
                    title: 'Edit Timesheet',
                },
                delete: {
                    title: 'Delete Timesheet',
                    subTitle: 'Are you sure you want to delete this timesheet?',
                    description: 'This action cannot be undone.',
                    notFound: 'Your request could not be performed. Make sure that you have the required permissions and that the timesheet has not been deleted.',
                    successDelete: 'The timesheet was deleted.',
                },
                form: {
                    submitSuccess: 'The timesheet was saved.',
                    staffMember: 'Staff Member',
                    activities: 'Activity',
                    engagement: 'Engagement',
                    activityDate: 'Activity Date',
                    activityHours: 'Activity Hours',
                    status: 'Status',
                    description: 'Description',
                    createTimesheet: 'Create Timesheet',
                },
                table: {
                    code: 'Code',
                    staffMember: 'Staff Member',
                    activity: 'Activity',
                    dateCreated: 'Date Created',
                    activityDate: 'Activity Date',
                    activityHours: 'Activity Hours',
                    status: 'Status',
                },
            },
            universeHistory: {
                recycleBin: 'Recycle Bin',
                hideTree: 'Hide Tree View',
                listUniverse: 'Manage Audit Universe',
                pageTitle: 'Audit Universe - Recycle Bin',
                tabs: {
                    functions: 'Audit Functions',
                    entities: 'Entities',
                    subjects: 'Subjects',
                },
                table: {
                    name: 'Name',
                    description: 'Description',
                    dateDeleted: 'Date Deleted',
                    deletedBy: 'Deleted By',
                    oldParent: 'Parent',
                    responsible: 'Responsible',
                    createdOn: 'Date Created',
                    updatedOn: 'Date Updated',
                },
            },
            universe: {
                universeEditSuccess: 'Your changes were saved.',
                name: 'Audit Universe',
                editSuccess: 'The %{type} was saved.',
                subject: 'Subject',
                entity: 'Entity',
                function: 'Function',
                riskRating: 'Risk Rating',
                edit: {
                    notFound: 'Your request could not be performed. Make sure that you have the required permissions and that the entity has not been deleted.',
                },
                delete: {
                    notFound: 'Your request could not be performed. Make sure that you have the required permissions and that the entity has not been deleted.',
                    successDeleteSubject: 'The subject was deleted.',
                    successDeleteFunction: 'The audit function was deleted.',
                    successDeleteEntity: 'The entity was deleted.',
                    subjectTitle: 'Delete Subject',
                    entityTitle: 'Delete Entity',
                    functionTitle: 'Delete Function',
                    subjectSubTitle: 'Are you sure you want to delete this subject?',
                    subjectDescription: 'The subject will be moved to the Recycle Bin. ' +
                        'You will not be able to include it in the scope of new engagements and the tag ' +
                        '"deleted" will be displayed after its name in objects it was associated with.',
                    functionSubTitle: 'Are you sure you want to delete this function?',
                    functionDescription: 'The function will be moved to the Recycle Bin and the tag "deleted" ' +
                        'will be displayed after its name in objects it was associated with.',
                    entitySubTitle: 'Are you sure you want to delete this entity?',
                    entityDescription: 'The entity will be moved to the Recycle Bin. ' +
                        'You will not be able to create new engagements with it and the tag "deleted" ' +
                        'will be displayed after its name in objects it was associated with.',
                },
                summary: {
                    editUnknownRisk: 'Edit Audit Risk',
                    riskAssociations: 'Risks Associations',
                    riskDesassociation: 'Disassociate Risk',
                    manageRiskAssociations: 'Associate Risks',
                    openEngagements: 'Open Engagements',
                    openFindings: 'Open Findings',
                    risks: 'Risks',
                    residualRisks: 'Residual Risks',
                    inherentRisks: 'Inherent Risks',
                },
                auditFunction: {
                    create: 'Create Audit Function',
                    createSuccess: 'The audit function was created.',
                    form: {
                        type: 'Type',
                        parent: 'Parent',
                        name: 'Name',
                        responsible: 'Responsible',
                        description: 'Description',
                        additionalInfo: 'Additional Information',
                    },
                },
                auditableEntity: {
                    create: 'Create Entity',
                    createSuccess: 'The entity was created.',
                    tabs: {
                        general: 'General',
                        details: 'Details',
                    },
                    form: {
                        type: 'Type',
                        parent: 'Parent',
                        name: 'Name',
                        responsible: 'Responsible',
                        description: 'Description',
                        additionalInfo: 'Additional Information',
                    },
                },
                auditSubject: {
                    create: 'Create Subject',
                    createSuccess: 'The subject was created.',
                    associationSuccess: 'The risks were associated with the subject.',
                    desassociationSuccess: 'The risk was disassociated from the subject.',
                    desassociation: {
                        title: 'Are you sure you want to disassociate the "%{risk}" risk from the subject?',
                        description: 'The risk will be disassociated and removed from this list. Ongoing engagements with this risk will not be affected.',
                    },
                    tabs: {
                        general: 'General',
                        details: 'Details',
                    },
                    form: {
                        type: 'Type',
                        parent: 'Parent',
                        name: 'Name',
                        responsible: 'Responsible',
                        description: 'Description',
                        additionalInfo: 'Additional Information',
                    },
                },
            },
            questionnaire: {
                noQuestions: 'There are no questions assigned to you in this questionnaire.',
                workingPaperApproved: 'Your response cannot be submitted because the auditor has finished evaluating this questionnaire.',
                saveQuestionNotFound: 'This question was edited and the page has been updated with the changes.',
                pageTitle: 'Audit Questions',
                listQuestionnaires: 'List Engagements',
                auditEngagement: 'Audit Engagement',
                auditor: 'Auditor',
                totalQuestions: 'Questions',
                answeredQuestions: 'Questions Answered',
                questionWasDeletedMessage: 'This questionnaire was edited and the page has been updated with the changes.',
                progressTitle: '% Completion',
                progress: '%{answered} of %{total} Answered (%{percent}%)',
                lastUpdate: 'Date Updated',
            },
            chat: {
                send: 'Send',
                attachment: 'Attachment',
                canBeDownloaded: 'This file can be downloaded once your message is sent.',
                comments: 'Conversation',
                titlePrefix: 'Response to',
                titleOwnChatMessage: 'You',
            },
            engagement: {
                summaryTitle: 'Engagement Actions',
                editEngagement: 'Execute Engagement',
                workingPapersTitle: 'Working Papers',
                listWorkingPapers: 'Back to Working Papers',
                singleEngagementPageTitle: 'Audit Engagement',
                listEngagements: 'Execute Audit Engagements',
                pageTitle: 'Execute Audit Engagements',
                create: 'Create Engagement',
                createSuccess: 'The engagement was created.',
                hours: 'Hours Planned',
                summary: {
                    author: 'Author',
                    dateCreated: 'Date Created',
                    dateUpdated: 'Date Updated',
                    updatedBy: 'Updated By',
                    status: 'Status',
                    code: 'Code',
                    analysisStartDate: 'Analysis Start Date',
                    analysisEndDate: 'Analysis End Date',
                    title: 'Engagement Details',
                    actions: 'Control Survey Actions',
                    save: 'Save',
                },
                popup: {
                    closeTitle: 'Are you sure you want to close this engagement?',
                    closeSuccess: 'The engagement was closed.',
                    closeDescription: 'This action cannot be undone. Once the engagement is closed, it will be permanently blocked for editing and the working papers cannot be reevaluated.',
                    closeHeader: 'Close Engagement',
                },
                workingPapers: {
                    popup: {
                        approve: {
                            header: 'Approve Working Paper',
                            title: 'Are you sure you want to approve this Working Paper?',
                            description: 'The lead auditor will be notified to review the questionnaire. All questions will be blocked for editing and will not be available in the Portal.',
                            success: 'The working paper was approved and the lead auditor has been notified to review it.',
                        },
                        reject: {
                            header: 'Reject Working Paper',
                            title: 'Are you sure you want to reject this working paper?',
                            description: 'The lead auditor will be notified to review the questionnaire. All questions will be blocked for editing and will not be available in the Portal.',
                            success: 'The working paper was rejected and the lead auditor has been notified to review it.',
                        },
                        suspend: {
                            header: 'Suspend Working Paper',
                            title: 'Are you sure you want to suspend the fieldwork for this working paper?',
                            description: 'The questionnaire will be blocked for editing until the fieldwork is resumed.',
                            success: 'The working paper was suspended and cannot be edited until resumed.',
                        },
                        resume: {
                            header: 'Resume Working Paper',
                            title: 'Are you sure you want to resume the fieldwork for this working paper?',
                            description: 'The questionnaire will become available for editing by auditors and the questions will be available for auditees in the Audit Portal.',
                            success: 'The working paper was resumed and can now be edited again.',
                        },
                        reevaluate: {
                            header: 'Reevaluate Working Paper',
                            title: 'Are you sure to reevaluate this working paper?',
                            description: 'The questionnaire will become available for editing by auditors and the questions will be available for auditees in the Audit Portal.',
                            success: 'The working paper can now be approved or rejected.',
                        },
                        resendQuestion: {
                            header: 'Resend Question',
                            title: 'Are you sure you want to resend this question?',
                            description: 'The question and its response will be available for editing and the question will be displayed in the Audit Portal if the auditor was not assigned to respond on behalf of the auditee.',
                            success: 'The question has been resent and is now available for editing.',
                        },
                    },
                    summaryTitle: 'Working Paper Actions',
                    importQuestions: 'Import Questions',
                    notifyUpdates: 'Notify Updates',
                    notifySent: 'The question was saved and the notify was sent to the Auditee.',
                    deleteQuestionSuccess: 'The question was deleted.',
                    questionNotFound: 'The question was not found.',
                    deleteTitle: 'Delete Question',
                    deleteSubTitle: 'Are you sure you want to delete this question?',
                    deleteDescription: 'After delete this question, it cannot be answered or commented any more. \n \n' +
                                       'Also, all previous information added by auditee will be lost.',
                    questionContainer: 'Questions',
                    pageTitle: 'Engagement Working Paper',
                    questionSubmitSuccess: 'The question was saved.',
                    saveQuestionSuccess: 'Your response was saved.',
                    answerQuestionSuccess: 'The answer was submitted.',
                    viewQuestion: 'View Question',
                    editQuestion: 'Edit Question',
                    evaluateQuestion: 'Evaluate Question',
                    submitSuccess: 'The working paper was saved.',
                    createQuestion: 'Add Question',
                    saveEvaluationSuccess: 'The question was evaluated.',
                    importAllQuestionSuccess: 'The questions were imported.',
                    importPartialQuestionSuccess: '%{total} questions could not be imported because they were deleted from the original questionnaire.',
                    form: {
                        auditeeNotes: 'Auditee Notes',
                        answer: 'Answer',
                        justification: 'Justification',
                        auditorNotes: 'Auditor Notes',
                        status: 'Status',
                        question: 'Question',
                        responseList: 'Response Options',
                        auditee: 'Auditee',
                        auditor: 'Auditor',
                        auditeeAnswer: 'Auditee',
                        evaluation: 'Evaluation Status',
                        auditorObservations: 'Auditor Observations',
                        auditeeObservations: 'Auditee Justification',
                        reviewerObservations: 'Reviewer Observations',
                        notifyAuditee: 'Don\'t notify auditee',
                        deadline: 'Deadline',
                        subject: 'Subject',
                        workingPaperStatus: 'Working Paper Status',
                        assignedAuditor: 'Auditor',
                        reviewStatus: 'Review Status',
                        description: 'Description',
                        evaluationProcedure: 'Evaluation Procedures',
                        auditProgram: 'Audit Program',
                        recommendations: 'Recommendations',
                        risks: 'Associated Risks',
                        answerByAuditor: 'Auditor enters answer on behalf of auditee',
                    },
                    workPaperNotFound: 'The working paper was not found.',
                    notFound: 'The engagement was not found.',
                    resendQuestion: 'Resend Question',
                    resend: 'Resend',
                    finding: {
                        popupTitle: 'Create Finding Event',
                        form: {
                            type: 'Event Type',
                            deadline: 'Deadline',
                            title: 'Title',
                            description: 'Description',
                            urgency: 'Urgency',
                            severity: 'Severity',
                            relevance: 'Relevance',
                            coordinator: 'Coordinator',
                            responsible: 'Responsible',
                            person: 'Person',
                            group: 'Group',
                        },
                        ratingScale: {
                            veryLow: 'Very Low',
                            low: 'Low',
                            medium: 'Medium',
                            high: 'High',
                            veryHigh: 'Very High',
                        },
                        eventTypes: {
                            auditFinding: 'Audit Finding',
                        },
                        openFindingSuccess: 'The audit finding was created',
                    },
                },
                table: {
                    subject: 'Subject',
                    dateSent: 'Date Created',
                    dateUpdated: 'Date Updated',
                    questions: 'Questions',
                    answered: 'Questions Answered',
                    question: 'Question',
                    deadline: 'Deadline',
                    answer: 'Answer',
                    answerStatus: 'Question Status',
                    auditeeObservations: 'Auditee Observations',
                    auditeeNotes: 'Auditee Notes',
                    progress: '% Progress',
                    code: 'Code',
                    engagementName: 'Engagement',
                    auditPlan: 'Audit Plan',
                    auditableEntity: 'Entity',
                    status: 'Status',
                    reviewStatus: 'Review Status',
                    evaluationStatus: 'Evaluation Status',
                    estimatedCost: 'Estimated Cost',
                    actualCost: 'Actual Cost',
                    planStart: 'Planned Start',
                    startDate: 'Actual Start',
                    planEnd: 'Planned End',
                    endDate: 'Actual End',
                    openControls: 'Open Controls',
                    openQuestions: 'Open Questions',
                    title: 'Title',
                    completion: '% Completion',
                    auditee: 'Auditee',
                    auditor: 'Auditor',
                    relevance: 'Relevance',
                    category: 'Category',
                    type: 'Type',
                    findingStatus: 'Finding Status',
                    finding: 'Finding',
                    author: 'Author',
                    engagement: 'Engagement',
                    dateCreated: 'Date Created',
                    workingPaperStatus: 'Working Paper Status',
                    leadAuditor: 'Lead Auditor',
                    menu: {
                        reportFinding: 'Report Finding',
                    },
                },
                form: {
                    attachments: 'Attachments',
                    title: 'Statement',
                    type: 'Type',
                    category: 'Category',
                    auditee: 'Auditee',
                    auditor: 'Auditor',
                    statement: 'Statement',
                    createControl: 'Create Control',
                    entity: 'Entity',
                    submitControlSurveySuccess: 'The survey was saved.',
                    origin: 'Origin',
                    likelihood: 'Likelihood',
                    impact: 'Impact',
                    risksAssociations: 'Statements',
                    registerAuditRisk: 'Register Audit Risk',
                    registerCaption: 'Register',
                    associateCaption: 'Associate',
                    name: 'Name',
                    auditPlan: 'Audit Plan',
                    scopeSubject: 'Scope Subjects',
                    leadAuditor: 'Lead Auditor',
                    plannedStartDate: 'Planned Start Date',
                    plannedEndDate: 'Planned End Date',
                    estimatedCost: 'Estimated Cost',
                    objectives: 'Objectives',
                    staff: 'Staff',
                    description: 'Description',
                    narrative: 'Narrative',
                },
                staff: {
                    staffMemberAlreadyAdded: 'This staff member had already been added to the engagement.',
                    role: 'Position',
                    certifications: 'Certifications',
                    name: 'Name',
                    plannedHours: 'Hours',
                    region: 'Region',
                },
                questions: {
                    deleteQuestionAlert: 'The question and any information provided by respondents will be permanently deleted and you will not be able to recover it.',
                    deleteQuestionFindingsAlert: 'Please review the associated findings to ensure adequate measures have been taken and delete events that are no longer necessary.',
                    warnFindingWhenEvaluationStatusAlertTitle: 'Are you sure you want change the status of this question?',
                    warnFindingWhenEvaluationStatusAlert: 'This question has associated findings events that will not be affected by this status change and may be need to be reviewed.',
                },
            },
            help: {
                importQuestions: {
                    title: 'Warning:',
                    message: 'The questions will be imported with the same response options. You will be assigned as auditee, and the planned end date of the engagement will be used as the deadline. These can be edited afterwards if needed.',
                },
                universeHelpText: '<p>In this section you can manage the audit universe and create audit engagements.</p>' +
                                  '<p><strong>Managing the Audit Universe</strong></p>' +
                                  '<p>Begin by registering your audit functions, entities, and subjects. Entities represent auditable units from the organization. These must be registered under audit functions, ' +
                                  'which represent the departments responsible for conducting audit engagements with them. Subjects are the key topics related to an entity that are evaluated during audit engagements. ' +
                                  'Note that you can only create engagements with entities that have subjects registered for them.</p>' +
                                  '<p>Next, associate risks with subjects. This allows audit engagements to be prioritized for entities with the highest number of risks associated with their subjects. You can associate risks ' +
                                  'from the Enterprise Risk module or register unmapped risks identified while preparing for an audit engagement. Risks registered here will be available for association with other subjects, ' +
                                  'but keep in mind they will only be available in the Audit module.</p>' +
                                  '<p>Finally, before creating an audit engagement, you must register your audit staff in the Manage Audit Resources section of this module. Note that people must be registered in the Organization ' +
                                  'module before they can be added to the audit staff or assigned as auditees to answer questions during engagements.</p>' +
                                  '<p>The audit universe must be periodically revised to reflect changes in the overall risk profile of the organization. You can create, edit, move, and delete objects as needed. Deleted objects ' +
                                  'are sent to the recycle bin, so you can keep track of important changes made to the audit universe.</p>' +
                                  '<p>Note that editing objects (functions, entities, and subjects) will not affect ongoing engagements, and also that objects in the scope of engagements cannot be deleted.</p>' +
                                  '<p><strong>Creating Audit Engagements</strong></p>' +
                                  '<p>Once the audit universe and the audit staff have been registered, audit coordinators can create engagements to audit the subjects associated with each entity. Auditors conduct the fieldwork for audit ' +
                                  'engagements through working papers with questions that evaluate each subject.</p>' +
                                  '<p>When creating an audit engagement, the audit coordinator provides a unique name for it. An audit plan and objectives must be selected and can also be created in this section, if needed, simply by ' +
                                  'typing a name and pressing Enter. These and other attachments can be associated with the engagement.</p>' +
                                  '<p>By default, all subjects associated with the selected entity are included in the scope of the engagement. Audit coordinators can remove any that are unnecessary.</p>' +
                                  '<p>The audit coordinator must then select a member of the audit staff to be the lead auditor of the engagement.</p>' +
                                  '<p>This person will be responsible for assigning auditors to working papers that are automatically created for each subject included in the scope once the engagement is saved. The lead auditor is also ' +
                                  'responsible for reviewing the fieldwork conducted by each auditor.</p>' +
                                  '<p>The audit coordinator must also select members of the audit staff to be included as auditors in the engagement. Keep in mind that each working paper must have an auditor assigned, who will be responsible ' +
                                  'for managing questions and evaluating responses from auditees in that working paper. The maximum number of hours that each auditor should work on the engagement can be specified, and later the number of hours ' +
                                  'actually worked can be added to timesheets in the Manage Resources section of this module.</p>',
                universeHelpTextTitle: 'Manage Audit Universe',
                engagementHelpTextTitle: 'Execute Audit Engagements',
                engagementPlanningHelpText: '<p>Once audit coordinators create audit engagements, the related fieldwork can be executed by auditors in this section. This is done through working papers with questions that evaluate controls related ' +
                                            'to each subject. By executing an audit engagement, auditors can access the Planning and the Working Papers tabs.</p>' +
                                            '<p><strong>Planning Tab</strong></p>' +
                                            '<p>Allows any information provided when the engagement was created to be viewed and edited by the lead auditor, if necessary, to keep the engagement up to date.</p>' +
                                            '<p>The audit engagement name must be unique. An audit plan and objectives must be selected and can also be created in this section, if needed, simply ' +
                                            'by typing a name for them and pressing enter. Attachments can be also be uploaded to provide additional information.</p>' +
                                            '<p>By default, all subjects associated with the selected entity are included in the scope of the engagement. Audit coordinators can remove any that are unnecessary.</p>' +
                                            '<p>The audit coordinator must then select a member of the audit staff to be the lead auditor of the engagement. This person will be responsible for assigning auditors to working papers that are automatically ' +
                                            'created for each subject included in the scope once the engagement is saved. The lead auditor is also responsible for reviewing the fieldwork conducted by each auditor.</p>' +
                                            '<p>The audit coordinator must also select members of the audit staff to be included as auditors in the engagement. Keep in mind that each working paper must have an auditor assigned, who will be responsible ' +
                                            'for managing and evaluating responses from auditees in that working paper. The maximum number of hours that each auditor should work on the engagement can be specified, and later the number of hours actually ' +
                                            'worked can be added to timesheets in the Manage Resources section of this module.</p>' +
                                            '<p>Once all working papers associated with an audit engagement have been evaluated by auditors, and once any review notes supplied by the lead auditor have been taken into consideration, the lead auditor can close the engagement. ' +
                                            'Note that this action cannot be undone.</p>' +
                                            '<p><strong>Working Papers Tab</strong></p>' +
                                            '<p>This tab displays a list of the working papers automatically created for all subjects included in the scope of the engagement. The columns display the auditor assigned, the number of questions created and answered, the percentage of ' +
                                            'progress regarding answered questions, and the approval and review status of the working paper. Each working paper can be accessed by clicking the subject name.</p>',
                workingPaperHelpTextTitle: 'Working Paper',
                workingPaperHelpText: '<p><strong>General Tab</strong></p>' +
                                      '<p>This tab displays general information on the working paper.</p>' +
                                      '<p>Here the lead auditor must assign an auditor to the working paper, who will be notified via e-mail. The lead auditor can provide a description for the working paper in addition to evaluation procedures and recommendations to be followed ' +
                                      'by auditors during the engagement. Attachments can also be uploaded, which will be visible to auditors.</p>' +
                                      '<p>The fieldwork for audit engagements is conducted through working papers with questions that evaluate each subject. The auditor will be responsible for creating or importing these questions in the Questionnaire tab, ' +
                                      'evaluating responses provided by auditees, and reporting any findings encountered in the process for questions evaluated as not compliant or needing improvement. Note that the Questionnaire tab is only enabled after an auditor is assigned ' +
                                      'to the working paper.</p>' +
                                      '<p>Once the auditor finishes evaluating the answers and justifications provided by auditees, the auditor must evaluate the working paper, approving or rejecting it. Note that a working paper can only be evaluated once all the questions have ' +
                                      'been evaluated. The lead auditor will then be notified via e-mail to review the working paper. Once a working paper is approved or rejected, all questions and answers will be blocked for editing.</p>' +
                                      '<p>Once the lead auditor reviews the answers and justifications and provides review notes, the review status must be changed to "Reviewed". The auditor will then be notified via e-mail to review the notes provided by the lead auditor. Based on ' +
                                      'the information provided by the lead auditor, the auditor can reevaluate a working paper if necessary.</p>' +
                                      '<p>A working paper can be suspended at any time. Once it is suspended, questions are blocked for editing by auditors and auditees until it is resumed.</p>' +
                                      '<p><strong>Questionnaire Tab</strong></p>' +
                                      '<p>The fieldwork for audit engagements is conducted through working papers with questions that evaluate each subject. On this tab, the auditor must create these questions, which will be answered by auditees to allow for an ' +
                                      'evaluation of the subject associated with the working paper.</p>' +
                                      '<p>For each question, the auditor must define the response options available, the auditee responsible for answering the question, and a deadline that can be used to define the priority of the question. Note that ' +
                                      'auditees must be registered as people in the Organization module before they can be assigned. Questions can also be edited and deleted if no longer required. Auditees will be notified via e-mail every time a question assigned to them is created, ' +
                                      'edited, or deleted after the engagement has been started, and will be able to view and answer them using the Audit Portal from the Home module.</p>' +
                                      '<p>Predefined response sets can be used or new sets can be created. Note that new sets will not be saved nor will any changes be saved to predefined sets. Auditors can enter answers on behalf of auditees in case they do not have access to the system. In this case, auditees will not be notified nor be able to view these questions ' +
                                      'in the Audit Portal.</p>' +
                                      '<p>When answering questions in the Audit Portal, auditees can also provide justifications and use the Conversation area to leave messages and send attachments to auditors.</p>' +
                                      '<p>To create questionnaires, auditors may import questions from other engagements, in which case they will be imported with the same response options. By default, the auditor importing the questions will be assigned as auditee, and the planned end date of the engagement ' +
                                      'will be used as the deadline. These can be edited if needed.</p>' +
                                      '<p>The auditor will be notified via e-mail when an auditee submits an answer to a question, after which the auditor must evaluate the answer. When evaluating a question, the auditor must also enter an answer on behalf of the auditee if this option ' +
                                      'was selected when the question was created.</p>' +
                                      '<p>Auditors may report audit findings from questions evaluated as not compliant or needing improvement. These will be created as Audit Finding-type events in the Workflow module so that they can be treated appropriately.</p>' +
                                      '<p>Once the auditor finishes evaluating the questions from a working paper, the auditor must approve or reject the working paper in the General tab.</p>',
                portalHelpTextTitle: 'Audit Portal',
                portalHelpText: '<p>The Audit Portal displays a list of all engagements with questions assigned to you.</p>' +
                                '<p>When you click on an engagement, you will see all questions from that engagement to which you were assigned as auditee. You must then select an answer for each question, and a justification can also be provided. ' +
                                'You can also use the Conversation area to send messages and files to the auditors.</p>' +
                                '<p>Once you are satisfied with your response, you can submit it so that the auditor can start the evaluation. You must submit the response for each question separately. Note that each question has a deadline, ' +
                                'and you can use the filter and sort options to display questions according to their status or deadline.</p>',
                resourcesHelpTextTitle: 'Manage Audit Resources',
                resourcesHelpText: '<p><strong>Staff</strong></p>' +
                                   '<p>People previously registered in the Organization module must be added as members of the audit staff so that they can be assigned to audit-related roles.</p>' +
                                   '<p>When adding people to the audit staff, their position and region must be specified. Their skills and certifications can be selected or, if needed, created in this section simply by typing a name and pressing Enter. The region, skills, and ' +
                                   'certifications of audit staff members will be displayed to audit coordinators when assigning them to an engagement.</p>' +
                                   '<p>These fields can be edited later if necessary, and staff members can also be deleted. Note that if a person assigned to an engagement is deleted from the audit staff or from the system, the word “deleted” will be displayed in parenthesis next to the person’s name wherever applicable.</p>' +
                                   '<p><strong>Timesheets</strong></p>' +
                                   '<p>Auditors can register the hours worked on engagements using timesheets that can be approved or rejected. Note that you can only create timesheets for your own hours.</p>' +
                                   '<p>When creating a timesheet, you must enter the activities performed, the associated engagement, the date they took place, and the number of hours spent on them. Optionally, a description can be provided. Timesheets can be edited or deleted as necessary.</p>',
            },
            table: {
                riskType: 'Risk Type',
                riskName: 'Risk Statement',
                riskOwner: 'Risk Owner',
                riskSource: 'Risk Source',
                riskSource_0: 'Enterprise Risk',
                riskSource_1: 'Audit',
                processAssociated: 'Associated Processes',
                subjectColumn: 'Subject',
                functionColumn: 'Function',
                entityColumn: 'Entity',
                lastAssessment: 'Last Assessment',
                controls: 'Controls',
                riskRating: 'Risk Rating',
                auditFunction: 'Audit Function',
                auditEntity: 'Audit Entity',
                auditSubject: 'Audit Subject',
                rating: 'Audit Control Rating',
                inherentRisk: 'Inherent Risk',
                residualRisk: 'Residual Risk',
                effort: 'Estimated Days of Work',
                responsible: 'Responsible Party',
                openEngagements: 'Open Engagements',
                openFindings: 'Open Findings',
                risks: '# Risks',
                residualRisks: 'Residual Risks',
                inherentRisks: 'Inherent Risks',
                lastEngagement: 'Last Engagement',
                name: 'Name',
            },
        },
        'pt-BR': {
            general: {
                refresh: 'Atualizar',
                selectField: 'Selecionar',
                noStaffSelected: 'Nenhum colaborador selecionado.',
                warningLeaveMessage: 'Tem certeza de que deseja sair desta página? \n \n' +
                    'As alterações realizadas podem não ser salvas.',
                portalPageTitle: 'Portal de Auditoria',
                pageTitle: 'Gerenciar Universo de Auditoria',
                submitFailed: 'Ocorreu um erro inesperado. Por favor, entre em contato com o administrador do sistema.',
                error: 'Ocorreu um erro inesperado. Por favor, entre em contato com o administrador do sistema.',
                noConnection: 'Não é possível conectar-se ao servidor. Por favor, entre em contato com o administrador do sistema.',
                moduleName: 'Universo de Auditoria',
                search: 'Buscar',
                required: 'Este campo é obrigatório.',
                accessDenied: 'Você não tem permissão para executar esta operação.',
                noData: 'Nenhum resultado foi encontrado.',
                notFound: 'Objeto não encontrado.',
                notAuthorized: 'Acesso não autorizado.',
                presentationMode: 'Pressione ESC para sair da tela cheia.',
                showMore: 'Mostrar mais...',
                fetchError: 'Ocorreu um erro inesperado. Código da Situação: %{status}',
            },
            pagination: {
                firstQuestion: 'Primeira Pergunta',
                prevQuestion: 'Pergunta Anterior',
                nextQuestion: 'Próxima Pergunta',
                lastQuestion: 'Última Pergunta',
                showingFilteredResults: 'Exibindo %{start}–%{end} de %{totalFiltered} resultados filtrados de %{total}',
                page: 'Página',
                firstPage: 'Primeira Página',
                prevPage: 'Página Anterior',
                nextPage: 'Próxima Página',
                lastPage: 'Última Página',
                showingResults: 'Exibindo %{start}–%{end} de %{total} resultados',
                of: 'de',
            },
            filters: {
                sortBy: 'Ordenar por:',
                filterBy: 'Filtrar por:',
                clearFilters: 'Limpar Filtro',
                inProgress: 'Em Progresso',
                notStarted: 'Não Iniciado',
                blocked: 'Bloqueado',
                answered: 'Respondido',
                deadline: 'Prazo',
                subject: 'Assunto',
            },
            prompt: {
                save: 'Salvar',
                cancel: 'Cancelar',
                back: 'Voltar',
            },
            combo: {
                createNewOption: 'Criar Nova Opção',
                select: 'Comece a digitar para selecionar',
                clearAll: 'Excluir tudo',
                clear: 'Excluir',
                noResults: 'Nenhum resultado foi encontrado',
                loading: 'Carregando...',
                showMore: 'Mostrar mais',
            },
            buttons: {
                close: 'Fechar',
                closeEngagement: 'Fechar Compromisso',
                approve: 'Aprovar',
                suspend: 'Suspender',
                resume: 'Retomar',
                reject: 'Rejeitar',
                reevaluate: 'Reavaliar',
                import: 'Importar',
                submitQuestionnaire: 'Enviar Resposta',
                answer: 'Resposta',
                notify: 'Notificar',
                saveAndNotifyAuditee: 'Salvar e Notificar Entidade Auditada',
                send: 'Enviar',
                create: 'Criar',
                add: 'Adicionar',
                save: 'Salvar',
                saveAndNext: 'Salvar e Próximo',
                cancel: 'Cancelar',
                disassociate: 'Desassociar',
                remove: 'Excluir',
            },
            validations: {
                required: 'Este campo é obrigatório.',
                minLength: 'Este campo aceita um mínimo de %{rule} caracteres.',
                maxLength: 'Este campo aceita um máximo de %{rule} caracteres.',
                minValue: 'O valor deve ser maior que %{rule}.',
                maxValue: 'O valor deve ser menor que %{rule}.',
                maxDecimals: 'O campo aceita no máximo %{rule} casas decimais.',
                zeroDecimals: 'Este campo não aceita casas decimais.',
                maxFileSize: 'O arquivo deve ser menor que %{rule} MB.',
                minFileSize: 'O tamanho do arquivo deve ter pelo menos %{rule} bytes.',
                fileTypes: 'O arquivo deve ser um dos seguintes tipos: %{rule}.',
                maxFiles: 'Este campo aceita no máximo %{rule} arquivos.',
                validateVersion: 'O novo número da versão deve ser maior que a versão atual.',
                sanitize: 'Este campo não pode conter HTML.',
                invalidEmail: 'Este não é um endereço de e-mail válido.',
            },
            riskUnknown: {
                editSuccess: 'O risco foi salvo.',
                notFound: 'O risco não foi encontrado.',
                submitSuccess: 'O risco foi salvo.',
            },
            presetOptions: {
                presets: 'Utilizar Opções de Resposta Padrão',
                select: 'Selecionar uma opção',
                maturity: {
                    title: 'Maturidade',
                    nonExistent: 'Inexistente/Desconhecido (Inexistente)',
                    insufficient: 'Insuficiente/Inadequado (Inicial)',
                    intuitive: 'Intuitivo/Identificado (Replicável)',
                    estabilished: 'Estabelecido/Padronizado (Definido)',
                    monitored: 'Monitorado/Controlado (Gerenciado)',
                    integrated: 'Integrado/Automatizado (Optimizado)',
                },
                criticality: {
                    title: 'Criticidade',
                    nonExistent: 'Inexistente',
                    minor: 'Leve',
                    significant: 'Significativo',
                    critical: 'Crítico',
                },
                confirmation: {
                    title: 'Confirmação',
                    compliant: 'Conforme',
                    notCompliant: 'Não Conforme',
                    nonApplicable: 'Não Aplicável',
                },
                simple: {
                    title: 'Simples',
                    yes: 'Sim',
                    no: 'Não',
                    idk: 'Eu não sei',
                },
            },
            tabs: {
                staff: 'Colaborador',
                timesheet: 'Folhas de Horas',
                questionnaire: 'Questionário',
                planning: 'Planejamento',
                general: 'Geral',
                workingPapers: 'Documentos de Trabalho',
            },
            staff: {
                pageTitle: 'Gerenciar Recursos de Auditoria',
                table: {
                    name: 'Nome',
                    duty: 'Tarefa',
                    region: 'Região',
                    skill: 'Habilidades',
                    certification: 'Certificações',
                    createdBy: 'Criado Por',
                    dateCreated: 'Criado Por',
                    lastUpdate: 'Última Atualização',
                },
                form: {
                    submitStaffMemberSuccess: 'O membro da equipe foi salvo.',
                    createStaffMember: 'Adicionar Membro da Equipe',
                    person: 'Pessoa',
                    duty: 'Tarefa',
                    region: 'Região',
                    skills: 'Habilidades',
                    certifications: 'Certificações',
                },
                edit: {
                    title: 'Editar Membro da Equipe',
                },
                delete: {
                    notFound: 'O membro não foi encontrado.',
                    successStaffMemberRemove: 'O membro foi excluído da equipe.',
                    title: 'Excluir Membro',
                    subTitle: 'Tem certeza de que deseja excluir este membro da equipe?',
                    description: 'A pessoa perderá o acesso ao módulo Auditoria e não estará mais disponível para associar-se aos objetos de Auditoria. ' +
                        'A etiqueta (excluído) será exibida ao lado do nome da pessoa nos objetos atualmente associados.',
                },
            },
            timesheets: {
                pageTitle: 'Gerenciar Recursos de Auditoria',
                edit: {
                    title: 'Editar Folha de Horas',
                },
                delete: {
                    title: 'Excluir Folha de Horas',
                    subTitle: 'Você tem certeza de que deseja excluir esta folha de horas?',
                    description: 'Essa ação não pode ser desfeita.',
                    notFound: 'Sua solicitação não pôde ser executada. Certifique-se de que você tem as permissões necessárias e que a folha de horas não foi excluída.',
                    successDelete: 'A folha de horas foi excluída.',
                },
                form: {
                    submitSuccess: 'A folha de horas foi salva.',
                    staffMember: 'Membro da Equipe',
                    activities: 'Atividade',
                    engagement: 'Compromisso',
                    activityDate: 'Data da Atividade',
                    activityHours: 'Horas de Atividade',
                    status: 'Situação',
                    description: 'Descrição',
                    createTimesheet: 'Criar Folha de Horas',
                },
                table: {
                    code: 'Código',
                    staffMember: 'Membro da Equipe',
                    activity: 'Atividade',
                    dateCreated: 'Criado em',
                    activityDate: 'Data da Atividade',
                    activityHours: 'Horas de Atividade',
                    status: 'Situação',
                },
            },
            universeHistory: {
                recycleBin: 'Lixeira de reciclagem',
                hideTree: 'Ocultar Modo de Exibição de Árvore',
                listUniverse: 'Gerenciar Universo de Auditoria',
                pageTitle: 'Universo de Auditoria - Lixeira de Reciclagem',
                tabs: {
                    functions: 'Funções de Auditoria',
                    entities: 'Entidades',
                    subjects: 'Assuntos',
                },
                table: {
                    name: 'Nome',
                    description: 'Descrição',
                    dateDeleted: 'Excluído em',
                    deletedBy: 'Excluído por',
                    oldParent: 'Último Pai',
                    responsible: 'Responsável',
                    createdOn: 'Criado em',
                    updatedOn: 'Atualizado em',
                },
            },
            universe: {
                universeEditSuccess: 'Suas alterações foram salvas',
                name: 'Universo de Auditoria',
                editSuccess: 'O %{type} foi salvo.',
                subject: 'Assunto',
                entity: 'Entidade',
                function: 'Função',
                riskRating: 'Classificação de Riscos',
                edit: {
                    notFound: 'Sua solicitação não pôde ser executada. Certifique-se de que você tem as permissões necessárias e que a entidade não foi excluída.',
                },
                delete: {
                    notFound: 'O assunto não foi encontrado.',
                    successDeleteSubject: 'O assunto foi excluído.',
                    successDeleteFunction: 'A função de auditoria foi excluída.',
                    successDeleteEntity: 'A entidade foi removida.',
                    subjectTitle: 'Excluir Assunto',
                    entityTitle: 'Excluir Entidade',
                    functionTitle: 'Excluir Função',
                    subjectSubTitle: 'Você tem certeza de que deseja excluir este assunto?',
                    subjectDescription: 'O assunto será movido para a Lixeira. ' +
                        'Você não poderá incluí-lo no escopo de novos compromissos e a etiqueta ' +
                        '"excluído" será exibida após seu nome nos objetos aos quais estava associado.',
                    functionSubTitle: 'Você tem certeza de que deseja excluir esta função?',
                    functionDescription: 'A função será movida para a Lixeira e a etiqueta "excluída" ' +
                        'será exibida após seu nome nos objetos aos quais estava associada.',
                    entitySubTitle: 'Você tem certeza de que deseja excluir esta entidade?',
                    entityDescription: 'A entidade será movida para a Lixeira. ' +
                        'Você não poderá criar novos compromissos com ela e a etiqueta ' +
                        '"excluída" será exibida após o seu nome nos objetos aos quais estava associada.',
                },
                summary: {
                    editUnknownRisk: 'Editar Risco de Auditoria',
                    riskAssociations: 'Associações de Riscos',
                    riskDesassociation: 'Desassociar Risco',
                    manageRiskAssociations: 'Associar Riscos',
                    openEngagements: 'Compromissos Abertos',
                    openFindings: 'Constatações Abertas',
                    risks: 'Riscos',
                    residualRisks: 'Riscos Residuais',
                    inherentRisks: 'Riscos Inerentes',
                },
                auditFunction: {
                    create: 'Criar Função de Auditoria',
                    createSuccess: 'A função de auditoria foi criada.',
                    form: {
                        type: 'Tipo',
                        parent: 'Pai',
                        name: 'Nome',
                        responsible: 'Responsável',
                        description: 'Descrição',
                        additionalInfo: 'Informações Adicionais',
                    },
                },
                auditableEntity: {
                    create: 'Criar Entidade',
                    createSuccess: 'A entidade foi criada.',
                    tabs: {
                        general: 'Geral',
                        details: 'Detalhes',
                    },
                    form: {
                        type: 'Tipo',
                        parent: 'Pai',
                        name: 'Nome',
                        responsible: 'Responsável',
                        description: 'Descrição',
                        additionalInfo: 'Informações Adicionais',
                    },
                },
                auditSubject: {
                    create: 'Criar Assunto',
                    createSuccess: 'O assunto foi criado.',
                    associationSuccess: 'Os riscos foram associados ao assunto.',
                    desassociationSuccess: 'O risco foi desassociado do assunto.',
                    desassociation: {
                        title: 'Tem certeza de que deseja desassociar o risco "%{risk}" do assunto?',
                        description: 'O risco será desassociado e removido desta lista. Compromissos contínuos relacionados a este risco não serão afetados.',
                    },
                    tabs: {
                        general: 'Geral',
                        details: 'Detalhes',
                    },
                    form: {
                        type: 'Tipo',
                        parent: 'Pai',
                        name: 'Nome',
                        responsible: 'Responsável',
                        description: 'Descrição',
                        additionalInfo: 'Informações Adicionais',
                    },
                },
            },
            questionnaire: {
                noQuestions: 'Não há perguntas atribuídas a você neste questionário.',
                workingPaperApproved: 'Sua resposta não pode ser enviada, pois o auditor concluiu a avaliação deste questionário.',
                saveQuestionNotFound: 'Esta pergunta foi editada e a página foi atualizada com as alterações.',
                pageTitle: 'Perguntas de Auditoria',
                listQuestionnaires: 'Listar Compromissos',
                auditEngagement: 'Compromisso de Auditoria',
                auditor: 'Auditor',
                totalQuestions: 'Perguntas',
                answeredQuestions: 'Perguntas Respondidas',
                questionWasDeletedMessage: 'Este questionário foi editado e a página foi atualizada com as alterações.',
                progressTitle: '% de Finalização',
                progress: '%{answered} de %{total} Respondidas (%{percent}%)',
                lastUpdate: 'Data de Atualização',
            },
            chat: {
                send: 'Enviar',
                attachment: 'Anexo',
                canBeDownloaded: 'Este arquivo pode ser baixado assim que sua mensagem for enviada.',
                comments: 'Comentário',
                titlePrefix: 'Resposta a',
                titleOwnChatMessage: 'Você',
            },
            engagement: {
                summaryTitle: 'Ações do Compromisso',
                editEngagement: 'Executar Compromisso',
                workingPapersTitle: 'Documentos de Trabalho',
                listWorkingPapers: 'Voltar para Documentos de Trabalho',
                singleEngagementPageTitle: 'Compromissos de Auditoria',
                listEngagements: 'Executar Compromissos de Auditoria',
                pageTitle: 'Executar Compromissos de Auditoria',
                create: 'Criar Compromisso',
                createSuccess: 'O compromisso foi criado.',
                hours: 'Horas Planejadas',
                summary: {
                    author: 'Autor',
                    dateCreated: 'Data de Criação',
                    dateUpdated: 'Data de Atualização',
                    updatedBy: 'Atualizado por',
                    status: 'Situação',
                    code: 'Código',
                    analysisStartDate: 'Data de Início de Análise',
                    analysisEndDate: 'Data de Término de Análise',
                    title: 'Detalhes do Compromisso',
                    actions: 'Controlar Ações da Pesquisa',
                    save: 'Salvar',
                },
                popup: {
                    closeTitle: 'Você tem certeza de que deseja encerrar este compromisso?',
                    closeSuccess: 'O compromisso foi fechado.',
                    closeDescription: 'Essa ação não pode ser desfeita. Uma vez encerrado o compromisso, ele será permanentemente bloqueado para edição e os documentos de trabalho não poderão ser reavaliados.',
                    closeHeader: 'Fechar Compromisso',
                },
                workingPapers: {
                    popup: {
                        approve: {
                            header: 'Aprovar Documento de Trabalho',
                            title: 'Você tem certeza de que deseja aprovar este Documento de Trabalho?',
                            description: 'O auditor líder será notificado para revisar o questionário. Todas as perguntas serão bloqueadas para edição e não estarão disponíveis no Portal.',
                            success: 'O documento de trabalho foi aprovado e o auditor líder foi notificado para revisá-lo.',
                        },
                        reject: {
                            header: 'Rejeitar Documento de Trabalho',
                            title: 'Você tem certeza de que deseja rejeitar este documento de trabalho?',
                            description: 'O auditor líder será notificado para revisar o questionário. Todas as perguntas serão bloqueadas para edição e não estarão disponíveis no Portal.',
                            success: 'O documento de trabalho foi rejeitado e o auditor líder foi notificado para analisá-lo.',
                        },
                        suspend: {
                            header: 'Suspender Documento de Trabalho',
                            title: 'Tem certeza de que deseja suspender o trabalho de campo para este documento de trabalho?',
                            description: 'O questionário será bloqueado para edição até que o trabalho de campo seja retomado.',
                            success: 'O documento de trabalho foi suspenso e não pode ser editado até ser retomado.',
                        },
                        resume: {
                            header: 'Retomar Documento de Trabalho',
                            title: 'Tem certeza de que deseja retomar o trabalho de campo para este documento de trabalho?',
                            description: 'O questionário ficará disponível para edição pelos auditores e as perguntas estarão disponíveis para os auditados no Portal de Auditoria.',
                            success: 'O documento de trabalho foi retomado e agora pode ser editado novamente.',
                        },
                        reevaluate: {
                            header: 'Reavaliar Documento de Trabalho',
                            title: 'Você tem certeza que deseja reavaliar este documento de trabalho?',
                            description: 'O questionário ficará disponível para edição pelos auditores e as perguntas estarão disponíveis para os auditados no Portal da Auditoria.',
                            success: 'O documento de trabalho agora pode ser aprovado ou rejeitado.',
                        },
                        unblockQuestion: {
                            header: 'Desbloquear Pergunta',
                            title: 'Você tem certeza de que deseja desbloquear esta pergunta?',
                            description: 'A pergunta e sua resposta estarão disponíveis para edição e serão exibidas no Portal de Auditoria se o auditor não tiver sido alocado para responder em nome do auditado.',
                            success: 'A pergunta e sua resposta agora podem ser editadas.',
                        },
                    },
                    summaryTitle: 'Ações do Documento de Trabalho',
                    importQuestions: 'Importar Perguntas',
                    notifyUpdates: 'Notificar Atualizações',
                    notifySent: 'A pergunta foi salva e a notificação enviada à Entidade Auditada.',
                    deleteQuestionSuccess: 'A pergunta foi excluída.',
                    questionNotFound: 'A pergunta não foi encontrada.',
                    deleteTitle: 'Excluir Pergunta',
                    deleteSubTitle: 'Você tem certeza de que deseja excluir esta pergunta?',
                    deleteDescription: 'Depois de excluir esta pergunta, ela não poderá mais ser respondida ou comentada. \n \n' +
                                       'Além disso, todas as informações anteriores adicionadas pelo auditado serão perdidas.',
                    questionContainer: 'Perguntas',
                    pageTitle: 'Documento de Trabalho do Compromisso',
                    questionSubmitSuccess: 'A pergunta foi salva.',
                    saveQuestionSuccess: 'A pergunta foi salva.',
                    answerQuestionSuccess: 'A resposta foi enviada',
                    viewQuestion: 'Visualizar Pergunta',
                    editQuestion: 'Editar Pergunta',
                    evaluateQuestion: 'Evaluate Question',
                    submitSuccess: 'O Documento de Trabalho foi salvo.',
                    createQuestion: 'Adicionar Pergunta',
                    saveEvaluationSuccess: 'A questão foi avaliada.',
                    importAllQuestionSuccess: 'As perguntas foram importadas.',
                    importPartialQuestionSuccess: '% {total} perguntas não puderam ser importadas, pois foram excluídas do questionário original.',
                    form: {
                        auditeeNotes: 'Notas da Entidade Auditada',
                        answer: 'Resposta',
                        justification: 'Justificativa',
                        auditorNotes: 'Notas do Auditor',
                        status: 'Situação',
                        question: 'Pergunta',
                        responseList: 'Opções de Resposta',
                        auditee: 'Entidade Auditada',
                        auditor: 'Auditor',
                        auditeeAnswer: 'Resposta do Auditado:',
                        evaluation: 'Avaliação da Pergunta:',
                        auditorObservations: 'Observações do Auditor',
                        auditeeObservations: 'Observações do Auditado',
                        reviewerObservations: 'Observações do Revisor',
                        notifyAuditee: 'Não notificar a entidade auditada',
                        deadline: 'Prazo',
                        subject: 'Assunto',
                        workingPaperStatus: 'Situação do Documento de Trabalho',
                        assignedAuditor: 'Auditor',
                        reviewStatus: 'Situação da Revisão',
                        description: 'Descrição',
                        evaluationProcedure: 'Procedimento de Avaliação',
                        auditProgram: 'Programa de Auditoria',
                        recommendations: 'Recomendações',
                        risks: 'Riscos Associados',
                        answerByAuditor: 'Auditor responde pelo do auditado',
                    },
                    workPaperNotFound: 'O documento de trabalho não foi encontrado.',
                    notFound: 'O compromisso não foi encontrado.',
                    unblockQuestion: 'Desbloquear Pergunta',
                    finding: {
                        popupTitle: 'Criar Evento de Constatação',
                        form: {
                            type: 'Tipo de Evento',
                            deadline: 'Prazo',
                            title: 'Título',
                            description: 'Descrição',
                            urgency: 'Urgência',
                            severity: 'Severidade',
                            relevance: 'Relevância',
                            coordinator: 'Coordenador',
                            responsible: 'Responsável',
                            person: 'Pessoa',
                            group: 'Grupo',
                        },
                        ratingScale: {
                            veryLow: 'Muito Baixo',
                            low: 'Baixo',
                            medium: 'Médio',
                            high: 'Alto',
                            veryHigh: 'Muito Alto',
                        },
                        eventTypes: {
                            auditFinding: 'Evento de Constatação',
                        },
                        openFindingSuccess: 'O evento de constatação foi criado',
                    },
                },
                table: {
                    subject: 'Assunto',
                    dateSent: 'Criado em',
                    dateUpdated: 'Data de Atualização',
                    questions: 'Total de Perguntas',
                    workingPaperStatus: 'Situação do Documento de Trabalho',
                    answered: 'Perguntas Respondidas',
                    question: 'Pergunta',
                    deadline: 'Prazo',
                    answer: 'Resposta',
                    answerStatus: 'Situação da Pergunta',
                    auditeeObservations: 'Observações da Entidade Auditada',
                    auditeeNotes: 'Notas da Entidade Auditada',
                    progress: '% Progresso',
                    code: 'Código',
                    engagementName: 'Nome',
                    auditPlan: 'Plano de Auditoria',
                    auditableEntity: 'Entidade',
                    status: 'Situação da Aprovação',
                    reviewStatus: 'Situação da Revisão',
                    evaluationStatus: 'Situação de Avaliação',
                    estimatedCost: 'Custo Estimado',
                    actualCost: 'Custo Real',
                    planStart: 'Início Planejado',
                    startDate: 'Data de Início',
                    planEnd: 'Finalização Planejada',
                    endDate: 'Data de Finalização',
                    openControls: 'Controles Abertos',
                    openQuestions: 'Perguntas Abertas',
                    title: 'Título',
                    completion: '% de Conclusão',
                    auditee: 'Entidade Auditada',
                    auditor: 'Auditor',
                    relevance: 'Relevância',
                    category: 'Categoria',
                    type: 'Tipo',
                    findingStatus: 'Situação da Constatação',
                    finding: 'Constatação',
                    author: 'Autor',
                    engagement: 'Compromisso',
                    dateCreated: 'Criado em',
                    leadAuditor: 'Auditor Líder',
                    menu: {
                        reportFinding: 'Relatório de Constatação',
                    },
                },
                form: {
                    attachments: 'Anexos',
                    title: 'Título',
                    type: 'Tipo',
                    category: 'Categoria',
                    auditee: 'Entidade Auditada',
                    auditor: 'Auditor',
                    statement: 'Declaração',
                    createControl: 'Criar Controle',
                    entity: 'Entidade',
                    submitControlSurveySuccess: 'A pesquisa foi salva.',
                    origin: 'Origem',
                    likelihood: 'Probabilidade',
                    impact: 'Impacto',
                    risksAssociations: 'Associações de Riscos',
                    registerAuditRisk: 'Registrar Risco de Auditoria',
                    registerCaption: 'Registrar',
                    associateCaption: 'Associar',
                    name: 'Nome',
                    auditPlan: 'Plano de Auditoria',
                    scopeSubject: 'Assunto do Escopo',
                    leadAuditor: 'Auditor Líder',
                    plannedStartDate: 'Data de Início Planejada',
                    plannedEndDate: 'Data de Finalização Planejada',
                    estimatedCost: 'Custo Estimado',
                    objectives: 'Objetivos',
                    staff: 'Recursos',
                    description: 'Descrição',
                    narrative: 'Narrativa',
                },
                staff: {
                    staffMemberAlreadyAdded: 'Esse membro da equipe já havia sido adicionado ao compromisso.',
                    role: 'Posição',
                    certifications: 'Certificações',
                    name: 'Nome',
                    plannedHours: 'Horas',
                    region: 'Region',
                },
                questions: {
                    deleteQuestionAlert: 'A pergunta e qualquer informação fornecida pelos respondentes será excluída permanentemente e você não poderá recuperá-la.',
                    deleteQuestionFindingsAlert: 'Por favor, revise as descobertas associadas para garantir que medidas adequadas foram tomadas e exclua os eventos que não são mais necessários.',
                    warnFindingWhenEvaluationStatusAlertTitle: 'Você tem certeza de que deseja alterar a situação desta pergunta?',
                    warnFindingWhenEvaluationStatusAlert: 'Esta pergunta tem eventos de constatação associados que não serão afetados por essa mudança de situação e pode haver necessidade de revisá-los.',
                },
            },
            help: {
                importQuestions: {
                    title: 'Aviso:',
                    message: 'As perguntas serão importadas com as mesmas opções de resposta. Você será alocado como auditado e a data final planejada do compromisso será utilizada como prazo final. Isso pode ser editado depois, se necessário.',
                },
                universeHelpText: '<p>Nesta seção, você pode gerenciar o universo de auditoria e criar compromissos de auditoria.</p>' +
                                  '<p><strong>Gerenciar o Universo de Auditoria</strong></p>' +
                                  '<p>Comece registrando suas funções de auditoria, entidades e assuntos. Entidades representam unidades auditáveis da organização. Estas devem ser registradas sob funções de auditoria, ' +
                                  'que representam os departamentos responsáveis por conduzir os compromissos de auditoria. Os assuntos são os principais tópicos relacionados a uma entidade que são avaliados durante os compromissos de auditoria. ' +
                                  'Observe que você só pode criar compromissos com entidades que têm assuntos registrados para elas.</p>' +
                                  '<p>Em seguida, associe os riscos aos assuntos. Isso permite que os compromissos de auditoria sejam priorizados para entidades com o maior número de riscos associados aos seus assuntos. Você pode associar riscos ' +
                                  'do módulo Riscos Corporativos ou registrar riscos não mapeados identificados durante a preparação para um compromisso de auditoria. Os riscos registrados aqui estarão disponíveis para associação com outros assuntos, ' +
                                  'mas lembre-se de que eles só estarão disponíveis no módulo Auditoria.</p>' +
                                  '<p>Por fim, antes de criar um compromisso de auditoria, você deve registrar sua equipe de auditoria na seção Gerenciar Recursos de Auditoria deste módulo. Observe que as pessoas devem ser registradas no módulo Organização ' +
                                  'antes de poderem ser adicionadas à equipe de auditoria ou alocadas como auditadas para responder a perguntas durante os compromissos.</p>' +
                                  '<p>O universo de auditoria deve ser revisado periodicamente para refletir mudanças no perfil geral de riscos da organização. Você pode criar, editar, mover e excluir objetos conforme necessário. Os objetos excluídos ' +
                                  'são enviados para a lixeira, para que você possa acompanhar as alterações importantes realizadas no universo de auditoria.</p>' +
                                  '<p>Observe que a edição de objetos (funções, entidades e assuntos) não afetará os compromissos em andamento e que os objetos no escopo dos compromissos não podem ser excluídos.</p>' +
                                  '<p><strong>Criar Compromissos de Auditoria</strong></p>' +
                                  '<p>Uma vez que o universo de auditoria e a equipe de auditoria tenham sido registrados, os coordenadores de auditoria podem criar compromissos para auditar os assuntos associados a cada entidade. ' +
                                  'Auditores conduzem o trabalho de campo para compromissos de auditoria através de documentos de trabalho com perguntas que avaliam cada assunto.</p>' +
                                  '<p>Ao criar um compromisso de auditoria, o coordenador da auditoria fornece um nome exclusivo para ele. Um plano de auditoria e objetivos devem ser selecionados e podem ser criados nesta seção, ' +
                                  'se necessário, simplesmente digitando um nome e pressionando Enter. Esses e outros anexos podem ser associados ao compromisso.</p>' +
                                  '<p>Por padrão, todos os assuntos associados à entidade selecionada são incluídos no escopo do compromisso. Os coordenadores de auditoria podem remover qualquer um que seja desnecessário.</p>' +
                                  '<p>O coordenador da auditoria deve então selecionar um membro da equipe de auditoria para ser o auditor líder do compromisso de auditoria.</p>' +
                                  '<p>Essa pessoa será responsável por alocar auditores em documentos de trabalho criados automaticamente para cada assunto incluído no escopo, assim que o compromisso for salvo. ' +
                                  'O auditor líder também é responsável por revisar o trabalho de campo realizado por cada auditor.</p>' +
                                  '<p>O coordenador da auditoria também deve selecionar membros da equipe de auditoria para serem incluídos como auditores no compromisso. Observe que cada documento de trabalho deve ter um auditor alocado, ' +
                                  'que será responsável por gerenciar perguntas e avaliar as respostas dos auditados nesse documento de trabalho. O número máximo de horas que cada auditor deve trabalhar nos compromissos pode ser especificado e, ' +
                                  'posteriormente, o número de horas realmente trabalhadas pode ser adicionado às folhas de horas na seção Gerenciar Recursos deste módulo.</p>',
                universeHelpTextTitle: 'Gerenciar Universo Auditável',
                engagementHelpTextTitle: 'Executar Compromissos de Auditoria',
                engagementPlanningHelpText: '<p>Uma vez que os coordenadores de auditoria criam os compromissos de auditoria, o trabalho de campo relacionado pode ser executado pelos auditores nesta seção. ' +
                                            'Isso é feito através de documentos de trabalho com perguntas que avaliam os controles relacionados a cada assunto. Ao executar um compromisso de auditoria, os auditores podem acessar as abas Planejamento e Folhas de Horas.</p>' +
                                            '<p><strong>Aba de Planejamento</strong></p>' +
                                            '<p>Permite que qualquer informação fornecida quando o compromisso foi criado seja visualizada e editada pelo auditor líder, se necessário, para manter o compromisso atualizado.</p>' +
                                            '<p>O nome do compromisso de auditoria deve ser exclusivo. Um plano de auditoria e objetivos devem ser selecionados e podem ser criados nesta seção, se necessário, ' +
                                            'simplesmente digitando um nome para eles e pressionando Enter. Anexos também podem ser enviados para fornecer informações adicionais.</p>' +
                                            '<p>Por padrão, todos os assuntos associados à entidade selecionada são incluídos no escopo do compromisso. Os coordenadores de auditoria podem remover qualquer um que seja desnecessário.</p>' +
                                            '<p>O coordenador de auditoria deve então selecionar um membro da equipe de auditoria para ser o auditor líder do compromisso. Essa pessoa será responsável por alocar auditores em documentos de trabalho criados ' +
                                            'automaticamente para cada assunto incluído no escopo, assim que o compromisso for salvo. O auditor líder também é responsável por revisar o trabalho de campo realizado por cada auditor.</p>' +
                                            '<p>O coordenador de auditoria também deve selecionar membros da equipe de auditoria para serem incluídos como auditores no compromisso. Observe que cada documento de trabalho deve ter um auditor alocado, ' +
                                            'que será responsável por gerenciar e avaliar as respostas dos auditados nesse documento de trabalho. O número máximo de horas que cada auditor deve trabalhar no compromisso pode ser especificado e, ' +
                                            'posteriormente, o número de horas realmente trabalhadas pode ser adicionado às folhas de horas na seção Gerenciar Recursos deste módulo.</p>' +
                                            '<p>Uma vez que todos os documentos de trabalho associados a um compromisso de auditoria tenham sido avaliados pelos auditores, e uma vez que qualquer nota de revisão fornecida pelo auditor líder tenha sido levada em consideração, ' +
                                            'o auditor líder pode encerrar o compromisso. Note que esta ação não pode ser desfeita.</p>' +
                                            '<p><strong>Aba de Documentos de Trabalho</strong></p>' +
                                            '<p>Essa aba exibe uma lista dos documentos de trabalho criados automaticamente para todos os assuntos incluídos no escopo do compromisso. As colunas exibem o auditor alocado, o número de perguntas criadas ' +
                                            'e respondidas, a porcentagem do progresso em relação às perguntas respondidas e a situação de aprovação e revisão do documento de trabalho. Cada documento de trabalho pode ser acessado clicando no nome do assunto.</p>',
                workingPaperHelpTextTitle: 'Documento de Trabalho',
                workingPaperHelpText: '<p><strong>Aba Geral</strong></p>' +
                                      '<p>Esta aba exibe informações gerais sobre o documento de trabalho.</p>' +
                                      '<p>Aqui, o auditor líder deve alocar um auditor para o documento de trabalho, que será notificado por e-mail. O auditor líder pode fornecer uma descrição para o documento de trabalho, além dos procedimentos ' +
                                      'de avaliação e recomendações a serem seguidas pelos auditores durante o compromisso. Anexos também podem ser enviados, o que será visível para os auditores.</p>' +
                                      '<p>O trabalho de campo para compromissos de auditoria é realizado através de documentos de trabalho com perguntas que avaliam cada assunto. O auditor será responsável por criar ou importar essas perguntas ' +
                                      'na aba Questionário, avaliar as respostas fornecidas pelos auditados e relatar quaisquer constatações encontradas no processo para perguntas avaliadas como não conformes ou que ' +
                                      'necessitem de melhorias. Observe que a aba Questionário somente é habilitada depois que um auditor é alocado ao documento de trabalho.</p>' +
                                      '<p>Quando o auditor termina de avaliar as respostas e justificativas fornecidas pelos auditados, o auditor deve avaliar o documento de trabalho, aprovando-o ou rejeitando-o. Observe que um documento de trabalho só pode ser avaliado depois que todas as perguntas ' +
                                      'tiverem sido avaliadas. O auditor líder será então notificado por e-mail para revisar o documento de trabalho. Depois que um documento de trabalho for aprovado ou rejeitado, todas as perguntas e respostas serão bloqueadas para edição.</p>' +
                                      '<p>Once the lead auditor reviews the answers and justifications and provides review notes, the review status must be changed to "Reviewed". The auditor will then be notified via e-mail to review the notes provided by the lead auditor. Base ' +
                                      'fornecidas pelo auditor líder. Com base nas informações fornecidas pelo auditor líder, o auditor pode reavaliar um documento de trabalho, se necessário.</p>' +
                                      '<p>Um documento de trabalho pode ser suspenso a qualquer momento. Uma vez suspenso, as perguntas são bloqueadas para edição por auditores e auditados até que seja retomado.</p>' +
                                      '<p><strong>Aba de Questionário</strong></p>' +
                                      '<p>O trabalho de campo para compromissos de auditoria é realizado através de documentos de trabalho com perguntas que avaliam cada assunto. Nesta aba, o auditor deve criar essas perguntas, ' +
                                      'que serão respondidas pelos auditados, para permitir uma avaliação do assunto associado ao documento de trabalho.</p>' +
                                      '<p>Para cada pergunta, o auditor deve definir as opções de resposta disponíveis, o auditado responsável por responder à pergunta e um prazo que pode ser utilizado para definir a prioridade da pergunta. ' +
                                      'Observe que os auditados devem ser registrados como pessoas no módulo Organização antes de poderem ser alocados. As perguntas também podem ser editadas e excluídas se não forem mais necessárias. ' +
                                      'Os auditores serão notificados por e-mail toda vez que uma questão atribuída a eles for criada, editada ou excluída após o início do compromisso, e poderão visualizá-las e respondê-las utilizando o Portal de Auditoria no módulo Meu Espaço.</p>' +
                                      '<p>Conjuntos de respostas predefinidos podem ser utilizados ou novos conjuntos podem ser criados. Observe que os novos conjuntos não serão salvos nem quaisquer alterações serão salvas em conjuntos predefinidos. ' +
                                      'Os auditores podem inserir respostas em nome dos auditados, caso não tenham acesso ao sistema. Neste caso, os auditados não serão notificados nem poderão visualizar estas perguntas no Portal de Auditoria.</p>' +
                                      '<p>Ao responder perguntas no Portal de Auditoria, os auditados também podem fornecer justificativas e utilizar a área Diálogo para deixar mensagens e enviar anexos a auditores.</p>' +
                                      '<p>Para criar questionários, os auditores podem importar perguntas de outros compromissos, que serão importados com as mesmas opções de resposta. Por padrão, o auditor que importa as perguntas será alocado ' +
                                      'como auditado e a data de finalização planejada para o compromisso será utilizada como prazo final. Estas informações podem ser editadas, se necessário.</p>' +
                                      '<p>O auditor será notificado por e-mail quando um auditado apresentar uma resposta a uma pergunta, após o que o auditor deve avaliar a resposta. ' +
                                      'Ao avaliar uma pergunta, o auditor também deve inserir uma resposta em nome do auditado, se essa opção foi selecionada quando a pergunta foi criada.</p>' +
                                      '<p>Os auditores podem relatar os resultados da auditoria das perguntas avaliadas como não conformes ou que precisam de melhorias. Serão criados como eventos do tipo Constatação de Auditoria no módulo Workflow, para que possam ser tratados adequadamente.</p>' +
                                      '<p>Quando o auditor termina de avaliar as perguntas de um documento de trabalho, deve aprovar ou rejeitar o documento de trabalho na aba Geral.</p>',
                portalHelpTextTitle: 'Portal de Auditoria',
                portalHelpText: '<p>O Portal de Auditoria exibe uma lista de todos os compromissos com perguntas atribuídas a você.</p>' +
                                '<p>Ao clicar em um compromisso, você visualizará todas as perguntas desse compromisso para as quais foi alocado como auditado. Você deve então selecionar uma resposta para cada pergunta, ' +
                                'e uma justificativa também pode ser fornecida. Você também pode utilizar a área Diálogo para enviar mensagens e arquivos para os auditores.</p>' +
                                '<p>Quando estiver satisfeito com sua resposta, você poderá enviá-la para que o auditor possa iniciar a avaliação. Você deve enviar a resposta para cada pergunta separadamente. Observe que cada pergunta ' +
                                'tem um prazo e você pode utilizar as opções de filtro e classificação para exibir as perguntas de acordo com a sua situação ou prazo.</p>',
                resourcesHelpTextTitle: 'Gerenciar Recursos de Auditoria',
                resourcesHelpText: '<p><strong>Equipe</strong></p>' +
                                   '<p>As pessoas anteriormente registradas no módulo Organização devem ser adicionadas como membros da equipe de auditoria para que possam ser alocadas em funções relacionadas à auditoria.</p>' +
                                   '<p>Ao adicionar pessoas à equipe de auditoria, sua posição e região devem ser especificadas. Suas habilidades e certificações podem ser selecionadas ou, se necessário, criadas nesta seção simplesmente digitando ' +
                                   'um nome e pressionando Enter. A região, as habilidades e as certificações dos membros da equipe de auditoria serão exibidas para os coordenadores de auditoria ao alocá-los em um compromisso.</p>' +
                                   '<p>Esses campos podem ser editados posteriormente, se necessário, e os membros da equipe também podem ser excluídos. Observe que, se uma pessoa alocada em um compromisso for excluída da equipe de auditoria ou do sistema, a palavra "excluído" será exibida entre parênteses ao lado do nome da pessoa, se aplicável.</p>' +
                                   '<p><strong>Folhas de Horas</strong></p>' +
                                   '<p>Os auditores podem registrar as horas trabalhadas em compromissos utilizando folhas de horas que podem ser aprovadas ou rejeitadas. Observe que você só pode criar folhas de horas para suas próprias horas.</p>' +
                                   '<p>Ao criar uma folha de horas, você deve inserir as atividades executadas, o compromisso associado, a data em que ocorreram e o número de horas gastas nelas. Opcionalmente, uma descrição pode ser fornecida. Folhas de horas podem ser editadas ou excluídas conforme necessário.</p>',
            },
            table: {
                riskType: 'Tipo de Risco',
                riskName: 'Declaração de Risco',
                riskOwner: 'Proprietário do Risco',
                riskSource: 'Fonte de Risco',
                riskSource_0: 'Risco Corporativo',
                riskSource_1: 'Auditoria',
                processAssociated: 'Processo Associado',
                subjectColumn: 'Assunto',
                functionColumn: 'Função',
                entityColumn: 'Entidade',
                lastAssessment: 'Última Avaliação',
                controls: 'Controles',
                riskRating: 'Classificação de Riscos',
                auditFunction: 'Função de Auditoria',
                auditEntity: 'Entidade de Auditoria',
                auditSubject: 'Assunto de Auditoria',
                rating: 'Classificação de Controle de Auditoria',
                inherentRisk: 'Risco Inerente',
                residualRisk: 'Risco Residual',
                effort: 'Dias de Trabalho Estimados',
                responsible: 'Parte Responsável',
                openEngagements: 'Compromissos Abertos',
                openFindings: 'Constatações Abertas',
                risks: 'Riscos',
                residualRisks: 'Riscos Residuais',
                inherentRisks: 'Riscos Inerentes',
                lastEngagement: 'Último Compromisso',
                name: 'Nome',
            },
        },
        'es-ES': {
            general: {
                refresh: 'Actualizar',
                selectField: 'Seleccionar',
                noStaffSelected: 'Ningún funcionario seleccionado.',
                warningLeaveMessage: '¿Está seguro de que desea salir de esta página? \n \n' +
                    'No se pueden guardar los cambios realizados.',
                portalPageTitle: 'Portal de Auditoria',
                pageTitle: 'Gestionar Universo de Auditoría',
                submitFailed: 'Se produjo un error inesperado. Por favor, póngase en contacto con el administrador del sistema.',
                error: 'Se produjo un error inesperado. Por favor, póngase en contacto con el administrador del sistema.',
                noConnection: 'No se pudo conectar al servidor. Por favor, póngase en contacto con el administrador del sistema.',
                moduleName: 'Universo de Auditoría',
                search: 'Buscar',
                required: 'Este campo es obligatorio.',
                accessDenied: 'Usted no tiene permiso para realizar esta operación.',
                noData: 'No se encontró ningún resultado.',
                notFound: 'Objeto no encontrado.',
                notAuthorized: 'Acceso no autorizado.',
                presentationMode: 'Presione ESC para salir de la pantalla completa.',
                showMore: 'Mostrar más...',
                fetchError: 'Se produjo un error inesperado. Código del Estado: %{status}',
            },
            pagination: {
                firstQuestion: 'Primera Pregunta',
                prevQuestion: 'Pregunta Anterior',
                nextQuestion: 'Próxima Pregunta',
                lastQuestion: 'Última Pregunta',
                showingFilteredResults: 'Exhibiendo %{start}–%{end} de %{totalFiltered} resultados filtrados de un total de %{total}',
                page: 'Página',
                firstPage: 'Primera Página',
                prevPage: 'Página Anterior',
                nextPage: 'Próxima Página',
                lastPage: 'Última Página',
                showingResults: 'Exhibiendo %{start}–%{end} de %{total} resultados',
                of: 'de',
            },
            filters: {
                sortBy: 'Ordenar por:',
                filterBy: 'Filtrar por:',
                clearFilters: 'Borrar Filtro',
                inProgress: 'En Progreso',
                notStarted: 'No Iniciado',
                blocked: 'Bloqueado',
                answered: 'Contestado',
                deadline: 'Fecha Límite',
                subject: 'Asunto',
            },
            prompt: {
                save: 'Guardar',
                cancel: 'Cancelar',
                back: 'Volver',
            },
            combo: {
                createNewOption: 'Crear Nueva Opción',
                select: 'Comience a escribir para seleccionar',
                clearAll: 'Eliminar todo',
                clear: 'Eliminar',
                noResults: 'No se encontró ningún resultado',
                loading: 'Cargando...',
                showMore: 'Mostrar más',
            },
            buttons: {
                close: 'Cerrar',
                closeEngagement: 'Cerrar Compromiso',
                approve: 'Aprobar',
                suspend: 'Suspender',
                resume: 'Retomar',
                reject: 'Rechazar',
                reevaluate: 'Reevaluar',
                import: 'Importar',
                submitQuestionnaire: 'Enviar Respuesta',
                answer: 'Respuesta',
                notify: 'Notificar',
                saveAndNotifyAuditee: 'Guardar y Notificar Entidad Auditada',
                send: 'Enviar',
                create: 'Crear',
                add: 'Añadir',
                save: 'Guardar',
                saveAndNext: 'Guardar y Próximo',
                cancel: 'Cancelar',
                disassociate: 'Desvincular',
                remove: 'Eliminar',
            },
            validations: {
                required: 'Este campo es obligatorio.',
                minLength: 'Este campo acepta un mínimo de %{rule} caracteres.',
                maxLength: 'Este campo acepta un máximo de %{rule} caracteres.',
                minValue: 'El valor debe ser mayor que %{rule}.',
                maxValue: 'El valor debe ser menor que %{rule}.',
                maxDecimals: 'El campo acepta como máximo %{rule} decimales.',
                zeroDecimals: 'Este campo no acepta decimales.',
                maxFileSize: 'El archivo debe ser menor que %{rule} MB.',
                minFileSize: 'El tamaño del archivo debe ser al menos %{rule} bytes.',
                fileTypes: 'El archivo debe ser uno de los tipos siguientes: %{rule}.',
                maxFiles: 'Este campo acepta como máximo %{rule} archivos.',
                validateVersion: 'El nuevo número de versión debe ser mayor que la versión actual.',
                sanitize: 'Este campo no puede contener HTML.',
                invalidEmail: 'Esta no es una dirección de correo electrónico válida.',
            },
            riskUnknown: {
                editSuccess: 'Se salvó el riesgo.',
                notFound: 'No se pudo encontrar el riesgo.',
                submitSuccess: 'Se salvó el riesgo.',
            },
            presetOptions: {
                presets: 'Utilizar Opciones de Respuesta Predefinidas',
                select: 'Seleccionar una opción',
                maturity: {
                    title: 'Madurez',
                    nonExistent: 'Inexistente/Desconocido (Inexistente)',
                    insufficient: 'Insuficiente/Inadecuado (Inicial)',
                    intuitive: 'Intuitivo/Identificado (Replicable)',
                    estabilished: 'Establecido/Estandarizado (Definido)',
                    monitored: 'Monitoreado/Controlado (Gestionado)',
                    integrated: 'Integrado/Automatizado (Optimizado)',
                },
                criticality: {
                    title: 'Criticidad',
                    nonExistent: 'Inexistente',
                    minor: 'Leve',
                    significant: 'Significativo',
                    critical: 'Crítico',
                },
                confirmation: {
                    title: 'Confirmación',
                    compliant: 'Conforme',
                    notCompliant: 'No Conforme',
                    nonApplicable: 'No Aplicable',
                },
                simple: {
                    title: 'Simples',
                    yes: 'Sí',
                    no: 'No',
                    idk: 'No lo sé',
                },
            },
            tabs: {
                staff: 'Funcionario',
                timesheet: 'Partes de Horas',
                questionnaire: 'Cuestionario',
                planning: 'Planificación',
                general: 'General',
                workingPapers: 'Documentos de Trabajo',
            },
            staff: {
                pageTitle: 'Gestionar Recursos de Auditoría',
                table: {
                    name: 'Nombre',
                    duty: 'Tarea',
                    region: 'Región',
                    skill: 'Habilidades',
                    certification: 'Certificaciones',
                    createdBy: 'Creado Por',
                    dateCreated: 'Creado el',
                    lastUpdate: 'Última Actualización',
                },
                form: {
                    submitStaffMemberSuccess: 'Se salvó el miembro del personal.',
                    createStaffMember: 'Añadir Miembro del Personal',
                    person: 'Persona',
                    duty: 'Tarea',
                    region: 'Región',
                    skills: 'Habilidades',
                    certifications: 'Certificaciones',
                },
                edit: {
                    title: 'Modificar Miembro del Personal',
                },
                delete: {
                    notFound: 'El miembro no fue encontrado.',
                    successStaffMemberRemove: 'El miembro fue eliminado del personal.',
                    title: 'Eliminar Miembro',
                    subTitle: '¿Está seguro de que desea eliminar a este miembro del personal?',
                    description: 'La persona perderá el acceso al módulo de Auditoría y ya no estará disponible para asociarse a los objetos de Auditoría. ' +
                        'La etiqueta (eliminado) será exhibida junto al nombre de la persona en los objetos asociados actualmente.',
                },
            },
            timesheets: {
                pageTitle: 'Gestionar Recursos de Auditoría',
                edit: {
                    title: 'Modificar Parte de Horas',
                },
                delete: {
                    title: 'Eliminar Parte de Horas',
                    subTitle: '¿Está seguro de que desea eliminar este parte de horas?',
                    description: 'Esta acción no se puede deshacer.',
                    notFound: 'Su solicitud no pudo ser realizada. Asegúrese de que tiene los permisos necesarios y de que no se ha eliminado el parte de horas.',
                    successDelete: 'El parte de horas fue eliminado.',
                },
                form: {
                    submitSuccess: 'Se salvó el parte de horas.',
                    staffMember: 'Miembro del Personal',
                    activities: 'Actividad',
                    engagement: 'Compromiso',
                    activityDate: 'Fecha de la Actividad',
                    activityHours: 'Horas de Actividad',
                    status: 'Estado',
                    description: 'Descripción',
                    createTimesheet: 'Criar Parte de Horas',
                },
                table: {
                    code: 'Código',
                    staffMember: 'Miembro del Personal',
                    activity: 'Actividad',
                    dateCreated: 'Creado el',
                    activityDate: 'Fecha de la Actividad',
                    activityHours: 'Horas de Actividad',
                    status: 'Estado',
                },
            },
            universeHistory: {
                recycleBin: 'Papelera de reciclaje',
                hideTree: 'Ocultar Vista de Árbol',
                listUniverse: 'Gestionar Universo de Auditoría',
                pageTitle: 'Universo de Auditoría - Papelera de Reciclaje',
                tabs: {
                    functions: 'Funcións de Auditoría',
                    entities: 'Entidad',
                    subjects: 'Asuntos',
                },
                table: {
                    name: 'Nombre',
                    description: 'Descripción',
                    dateDeleted: 'Eliminado el',
                    deletedBy: 'Eliminado por',
                    oldParent: 'Último Padre',
                    responsible: 'Responsable',
                    createdOn: 'Creado el',
                    updatedOn: 'Actualizado el',
                },
            },
            universe: {
                universeEditSuccess: 'Se guardaron sus cambios.',
                name: 'Universo de Auditoría',
                editSuccess: 'Se guardó el %{type}.',
                subject: 'Asunto',
                entity: 'Entidad',
                function: 'Función',
                riskRating: 'Clasificación de Riesgos',
                edit: {
                    notFound: 'Su solicitud no pudo ser realizada. Asegúrese de que tiene los permisos necesarios y de que no se ha eliminado la entidad.',
                },
                delete: {
                    notFound: 'El asunto no fue encontrado.',
                    successDeleteSubject: 'El asunto fue eliminado.',
                    successDeleteFunction: 'La función de auditoria fue eliminada.',
                    successDeleteEntity: 'La entidad fue eliminada.',
                    subjectTitle: 'Eliminar Asunto',
                    entityTitle: 'Eliminar Entidad',
                    functionTitle: 'Eliminar Función',
                    subjectSubTitle: '¿Está seguro de que desea eliminar este asunto?',
                    subjectDescription: 'Se moverá el asunto a la Papelera. ' +
                        'No podrá incluirlo en el ámbito de nuevos compromisos y la ' +
                        'etiqueta "eliminado" aparecerá después de su nombre en los objetos a los que estaba asociado.',
                    functionSubTitle: '¿Está seguro de que desea eliminar esta función?',
                    functionDescription: 'Se moverá la función a la Papelera y la etiqueta ' +
                        '"eliminada" se mostrará después de su nombre en los objetos a los que estaba asociada.',
                    entitySubTitle: '¿Está seguro de que desea eliminar esta entidad?',
                    entityDescription: 'Se moverá la entidad a la Papelera. ' +
                        'No podrá crear nuevos compromisos con ella y la etiqueta ' +
                        '"eliminada" aparecerá después de su nombre en los objetos a los que estaba asociada.',
                },
                summary: {
                    editUnknownRisk: 'Modificar Riesgo de Auditoría',
                    riskAssociations: 'Asociaciones de Riesgos',
                    riskDesassociation: 'Disociar Riesgo',
                    manageRiskAssociations: 'Asociar Riesgos',
                    openEngagements: 'Compromisos Abiertos',
                    openFindings: 'Constataciones Abiertas',
                    risks: 'Riscos',
                    residualRisks: 'Riesgos Residuales',
                    inherentRisks: 'Riesgos Inherentes',
                },
                auditFunction: {
                    create: 'Crear Función de Auditoría',
                    createSuccess: 'La función de auditoría fue creada.',
                    form: {
                        type: 'Tipo',
                        parent: 'Padre',
                        name: 'Nombre',
                        responsible: 'Responsable',
                        description: 'Descripción',
                        additionalInfo: 'Informaciones Adicionales',
                    },
                },
                auditableEntity: {
                    create: 'Crear Entidad',
                    createSuccess: 'La entidad fue creada.',
                    tabs: {
                        general: 'General',
                        details: 'Detalles',
                    },
                    form: {
                        type: 'Tipo',
                        parent: 'Padre',
                        name: 'Nombre',
                        responsible: 'Responsable',
                        description: 'Descripción',
                        additionalInfo: 'Informaciones Adicionales',
                    },
                },
                auditSubject: {
                    create: 'Crear Asunto',
                    createSuccess: 'El asunto fue creado.',
                    associationSuccess: 'Los riesgos se asociaron al asunto.',
                    desassociationSuccess: 'El riesgo fue disociado del asunto.',
                    desassociation: {
                        title: '¿Está seguro de que desea disociar el riesgo "%{risk}" del asunto?',
                        description: 'El riesgo será disociado y eliminado de esta lista. Los compromisos continuos relacionados con este riesgo no se verán afectados.',
                    },
                    tabs: {
                        general: 'General',
                        details: 'Detalles',
                    },
                    form: {
                        type: 'Tipo',
                        parent: 'Padre',
                        name: 'Nombre',
                        responsible: 'Responsable',
                        description: 'Descripción',
                        additionalInfo: 'Informaciones Adicionales',
                    },
                },
            },
            questionnaire: {
                noQuestions: 'No hay preguntas asignadas a usted en este cuestionario.',
                workingPaperApproved: 'Su respuesta no puede ser enviada, porque el auditor ha terminado de evaluar este cuestionario.',
                saveQuestionNotFound: 'Esta pregunta fue modificada y la página se ha actualizado con los cambios.',
                pageTitle: 'Preguntas de Auditoría',
                listQuestionnaires: 'Listar Compromisos',
                auditEngagement: 'Compromiso de Auditoría',
                auditor: 'Auditor',
                totalQuestions: 'Preguntas',
                answeredQuestions: 'Preguntas Respondidas',
                questionWasDeletedMessage: 'Este cuestionario fue modificado y la página se actualizó con los cambios.',
                progressTitle: '% de Finalización',
                progress: '%{answered} de %{total} Respondidas (%{percent}%)',
                lastUpdate: 'Fecha de Actualización',
            },
            chat: {
                send: 'Enviar',
                attachment: 'Archivo Adjunto',
                canBeDownloaded: 'Este archivo puede ser descargado una vez que su mensaje es enviado.',
                comments: 'Comentario',
                titlePrefix: 'Respuesta a',
                titleOwnChatMessage: 'Usted',
            },
            engagement: {
                summaryTitle: 'Acciones del Compromiso',
                editEngagement: 'Ejecutar Compromiso',
                workingPapersTitle: 'Documentos de Trabajo',
                listWorkingPapers: 'Volver a Documentos de Trabajo',
                backEngagement: 'Volver al Compromiso',
                singleEngagementPageTitle: 'Compromisos de Auditoría',
                listEngagements: 'Ejecutar Compromisos de Auditoría',
                pageTitle: 'Ejecutar Compromisos de Auditoría',
                create: 'Crear Compromiso',
                createSuccess: 'El compromiso fue creado.',
                hours: 'Horas Planeadas',
                summary: {
                    author: 'Autor',
                    dateCreated: 'Fecha de Creación',
                    dateUpdated: 'Fecha de Actualización',
                    updatedBy: 'Actualizado por',
                    status: 'Estado',
                    code: 'Código',
                    analysisStartDate: 'Fecha de Inicio de Análisis',
                    analysisEndDate: 'Fecha de Finalización de Análisis',
                    title: 'Detalles del Compromiso',
                    actions: 'Controlar Acciones de la Encuesta',
                    save: 'Guardar',
                },
                popup: {
                    closeTitle: '¿Está seguro de que quiere cerrar este compromiso?',
                    closeSuccess: 'El compromiso fue cerrado.',
                    closeDescription: 'No se puede deshacer esta acción. Una vez que se cierre el compromiso, él será bloqueado permanentemente para edición y los documentos de trabajo no pueden ser reevaluados.',
                    closeHeader: 'Cerrar Compromiso',
                },
                workingPapers: {
                    popup: {
                        approve: {
                            header: 'Aprobar Documento de Trabajo',
                            title: '¿Está seguro de que quiere aprobar este Documento de Trabajo?',
                            description: 'El auditor principal será notificado para revisar el cuestionario. Todas las preguntas serán bloqueadas para edición y no estarán disponibles en el Portal.',
                            success: 'El documento de trabajo fue aprobado y el auditor principal ha sido notificado para revisarlo.',
                        },
                        reject: {
                            header: 'Rechazar Documento de Trabajo',
                            title: '¿Está seguro de que desea rechazar este documento de trabajo?',
                            description: 'El auditor principal será notificado para revisar el cuestionario. Todas las preguntas serán bloqueadas para edición y no estarán disponibles en el Portal.',
                            success: 'El documento de trabajo fue rechazado y el auditor principal ha sido notificado para revisarlo.',
                        },
                        suspend: {
                            header: 'Suspender Documento de Trabajo',
                            title: '¿Está seguro de que desea suspender el trabajo de campo para este documento de trabajo?',
                            description: 'El cuestionario será bloqueado para edición hasta que se retome el trabajo de campo.',
                            success: 'Se suspendió el documento de trabajo y no se puede modificarlo hasta que se reanude.',
                        },
                        resume: {
                            header: 'Retomar Documento de Trabajo',
                            title: '¿Está seguro de que desea retomar el trabajo de campo para este documento de trabajo?',
                            description: 'El cuestionario estará disponible para edición por los auditores y las preguntas estarán disponibles para los auditados en el Portal de Auditoría.',
                            success: 'Se reanudó el documento de trabajo y ahora se puede volver a modificarlo.',
                        },
                        reevaluate: {
                            header: 'Revaluar Documento de Trabajo',
                            title: '¿Está seguro de reevaluar este documento de trabajo?',
                            description: 'El cuestionario estará disponible para edición por los auditores y las preguntas estarán disponibles para los auditados en el Portal de Auditoría.',
                            success: 'El documento de trabajo ahora puede ser aprobado o rechazado.',
                        },
                        unblockQuestion: {
                            header: 'Desbloquear Pregunta',
                            title: '¿Está seguro de que desea desbloquear esta pregunta? ',
                            description: 'La pregunta y su respuesta estarán disponibles para edición y se mostrarán en el Portal de Auditoría si el auditor no fue asignado para responder en nombre del auditado.',
                            success: 'La pregunta y su respuesta ahora pueden ser modificadas.',
                        },
                    },
                    summaryTitle: 'Acciones del Documento de Trabajo',
                    importQuestions: 'Importar Preguntas',
                    notifyUpdates: 'Notificar Actualizaciones',
                    notifySent: 'Se guardó la pregunta y la notificación fue enviada a la Entidad Auditada.',
                    deleteQuestionSuccess: 'A pregunta fue eliminada.',
                    questionNotFound: 'La pregunta no fue encontrada',
                    deleteTitle: 'Eliminar Pregunta',
                    deleteSubTitle: '¿Está seguro de que desea eliminar esta pregunta?',
                    deleteDescription: 'Después de eliminar esta pregunta, no podrá más ser respondida ni comentada. \n \n' +
                                       'Además, se perderá toda la información anterior agregada por el auditado.',
                    questionContainer: 'Preguntas',
                    pageTitle: 'Documento de Trabajo del Compromiso',
                    questionSubmitSuccess: 'Se guardó la pregunta.',
                    saveQuestionSuccess: 'Se salvó la pregunta.',
                    answerQuestionSuccess: 'La respuesta fue enviada.',
                    viewQuestion: 'Visualizar Pregunta',
                    editQuestion: 'Modificar Pregunta',
                    evaluateQuestion: 'Evaluate Question',
                    createQuestion: 'Añadir Pregunta',
                    saveEvaluationSuccess: 'La pregunta fue evaluada.',
                    importAllQuestionSuccess: 'Las preguntas fueron importadas.',
                    importPartialQuestionSuccess: 'No se pudieron importar %{total} preguntas, porque fueron eliminadas del cuestionario original.',
                    form: {
                        auditeeNotes: 'Notas de la Entidad Auditada',
                        answer: 'Respuesta',
                        justification: 'Justificación',
                        auditorNotes: 'Notas del Auditor',
                        status: 'Estado',
                        question: 'Pregunta',
                        responseList: 'Opciones de Respuesta',
                        auditee: 'Entidad Auditada',
                        auditor: 'Auditor',
                        auditeeAnswer: 'Respuesta del Auditado:',
                        evaluation: 'Evaluación de la Pregunta:',
                        auditorObservations: 'Observaciones del Auditor',
                        auditeeObservations: 'Observaciones del Auditado',
                        reviewerObservations: 'Observaciones del Revisor',
                        notifyAuditee: 'No notificar la entidad auditada',
                        deadline: 'Fecha Límite',
                        subject: 'Asunto',
                        workingPaperStatus: 'Estado del Documento de Trabajo',
                        assignedAuditor: 'Auditor',
                        reviewStatus: 'Estado de Revisión',
                        description: 'Descripción',
                        evaluationProcedure: 'Procedimiento de Evaluación',
                        auditProgram: 'Programa de Auditoría',
                        recommendations: 'Recomendaciones',
                        risks: 'Riesgos Asociados',
                        answerByAuditor: 'El auditor ingresa la respuesta en nombre del auditado',
                    },
                    workPaperNotFound: 'El documento de trabajo no fue encontrado.',
                    notFound: 'El compromiso no fue encontrado.',
                    unblockQuestion: 'Desbloquear Pregunta',
                    finding: {
                        popupTitle: 'Crear Evento de Constatación',
                        form: {
                            type: 'Tipo de Evento',
                            deadline: 'Fecha Límite',
                            title: 'Título',
                            description: 'Descripción',
                            urgency: 'Urgencia',
                            severity: 'Severidad',
                            relevance: 'Relevancia',
                            coordinator: 'Coordinador',
                            responsible: 'Responsable',
                            person: 'Persona',
                            group: 'Grupo',
                        },
                        ratingScale: {
                            veryLow: 'Muy Bajo',
                            low: 'Bajo',
                            medium: 'Medio',
                            high: 'Alto',
                            veryHigh: 'Muy Alto',
                        },
                        eventTypes: {
                            auditFinding: 'Evento de Constatación',
                        },
                        openFindingSuccess: 'El evento de constatación fue creado',
                    },
                },
                table: {
                    subject: 'Asunto',
                    dateSent: 'Creado el',
                    dateUpdated: 'Fecha de Actualización',
                    questions: 'Total de Preguntas',
                    workingPaperStatus: 'Estado del Documento de Trabajo',
                    answered: 'Preguntas Respondidas',
                    question: 'Pregunta',
                    deadline: 'Fecha Límite',
                    answer: 'Respuesta',
                    answerStatus: 'Estado de la Pregunta',
                    auditeeObservations: 'Observaciones de la Entidad Auditada',
                    auditeeNotes: 'Notas de la Entidad Auditada',
                    progress: '% Progreso',
                    code: 'Código',
                    engagementName: 'Nombre',
                    auditPlan: 'Plan de Auditoría',
                    auditableEntity: 'Entidad',
                    status: 'Estado de Aprobación',
                    reviewStatus: 'Estado de Revisión',
                    evaluationStatus: 'Estado de Evaluación',
                    estimatedCost: 'Costo Estimado',
                    actualCost: 'Costo Real',
                    planStart: 'Inicio Planeado',
                    startDate: 'Fecha de Inicio',
                    planEnd: 'Finalización Planeada',
                    endDate: 'Fecha de Finalización',
                    openControls: 'Controles Abiertos',
                    openQuestions: 'Preguntas Abiertas',
                    title: 'Título',
                    completion: '% de Finalización',
                    auditee: 'Entidad Auditada',
                    auditor: 'Auditor',
                    relevance: 'Relevancia',
                    category: 'Categoría',
                    type: 'Tipo',
                    findingStatus: 'Estado de Constatación',
                    finding: 'Constatación',
                    author: 'Autor',
                    engagement: 'Compromiso',
                    dateCreated: 'Creado el',
                    leadAuditor: 'Auditor Líder',
                    menu: {
                        reportFinding: 'Reporte de Constatación',
                    },
                },
                form: {
                    attachments: 'Archivos Adjuntos',
                    title: 'Título',
                    type: 'Tipo',
                    category: 'Categoría',
                    auditee: 'Entintad Auditada',
                    auditor: 'Auditor',
                    statement: 'Declaración',
                    createControl: 'Crear Control',
                    entity: 'Entidad',
                    submitControlSurveySuccess: 'Se guardó la encuesta.',
                    origin: 'Origen',
                    likelihood: 'Probabilidad',
                    impact: 'Impacto',
                    risksAssociations: 'Asociaciones de Riesgos',
                    registerAuditRisk: 'Registrar Riesgo de Auditoría',
                    registerCaption: 'Registrar',
                    associateCaption: 'Asociar',
                    name: 'Nombre',
                    auditPlan: 'Plan de Auditoría',
                    scopeSubject: 'Asunto del Alcance',
                    leadAuditor: 'Auditor Líder',
                    plannedStartDate: 'Fecha de Inicio Planeada',
                    plannedEndDate: 'Fecha de Finalización Planeada',
                    estimatedCost: 'Costo Estimado',
                    objectives: 'Objetivos',
                    staff: 'Recursos',
                    description: 'Descripción',
                    narrative: 'Narrativa',
                },
                staff: {
                    staffMemberAlreadyAdded: 'Este miembro del personal ya se había añadido al compromiso.',
                    role: 'Posición',
                    certifications: 'Certificaciones',
                    name: 'Nombre',
                    plannedHours: 'Horas',
                    region: 'Region',
                },
                questions: {
                    deleteQuestionAlert: 'La pregunta y cualquier información proporcionada por los encuestados se eliminará de forma permanente y no podrá recuperarla.',
                    deleteQuestionFindingsAlert: 'Por favor, revise las constataciones asociadas para asegurarse de que se hayan tomado las medidas adecuadas y elimine los eventos que ya no son necesarios.',
                    warnFindingWhenEvaluationStatusAlertTitle: '¿Está seguro de que desea cambiar el estado de esta pregunta?',
                    warnFindingWhenEvaluationStatusAlert: 'Esta pregunta tiene eventos de constatación asociados que no se verán afectados por este cambio de estado y pueden necesitar ser revisados.',
                },
            },
            help: {
                importQuestions: {
                    title: 'Advertencia:',
                    message: 'Las preguntas serán importadas con las mismas opciones de respuesta. Usted será asignado como auditado, y la fecha de finalización planificada del compromiso será utilizada como fecha límite. Esto puede ser modificado después, si es necesario.',
                },
                universeHelpText: '<p>En esta sección se puede gestionar el universo de auditoría y crear compromisos de auditoría.</p>' +
                                  '<p><strong>Gestionar el Universo de Auditoría</strong></p>' +
                                  '<p>Comience registrando sus funcionalidades de auditoría, entidades y asuntos. Las entidades representan unidades auditables de la organización. Estas deben ser registradas bajo las funcionalidades de auditoría, ' +
                                  'que representan a los departamentos responsables de realizar los trabajos de auditoría con ellos. Los asuntos son los temas clave relacionados con una entidad que son evaluados durante los compromisos de auditoría. ' +
                                  'Observe que solo se pueden crear compromisos con entidades que tienen asuntos registrados para ellas.</p>' +
                                  '<p>A continuación, asocie los riesgos a los asuntos. Esto permite que los compromisos de auditoría sean priorizados para las entidades con el mayor número de riesgos asociados a sus asuntos. ' +
                                  'Puede asociar los riesgos del módulo Riesgos Corporativos o registrar los riesgos no asignados identificados mientras se prepara para un compromiso de auditoría. ' +
                                  'Los riesgos registrados aquí estarán disponibles para asociación con otros asuntos, pero observe que solo estarán disponibles en el módulo Auditoría.</p>' +
                                  '<p>Finalmente, antes de crear un compromiso de auditoría, debe registrar su personal de auditoría en la sección Gestionar Recursos de Auditoría de este módulo. ' +
                                  'Observe que las personas deben estar registradas en el módulo Organización antes de que puedan ser agregadas al personal de auditoría o asignadas como auditados para responder preguntas durante compromisos.</p>' +
                                  '<p>El universo de auditoría debe ser periódicamente revisado para reflejar los cambios en el perfil de riesgo general de la organización. Se pueden crear, modificar, mover y eliminar objetos según sea necesario. ' +
                                  'Los objetos eliminados son enviados a la papelera de reciclaje, para que se pueda realizar un seguimiento de los cambios importantes realizados en el universo de auditoría.</p>' +
                                  '<p>Observe que la edición de objetos (funcionalidades, entidades y asuntos) no afectará los compromisos en curso, y también que los objetos en el alcance de los compromisos no pueden ser eliminados.</p>' +
                                  '<p><strong>Crear Compromisos de Auditoría</strong></p>' +
                                  '<p>Una vez que el universo de auditoría y el personal de auditoría se han registrado, los coordinadores de auditoría pueden crear compromisos para auditar los asuntos asociados con cada entidad. ' +
                                  'Los auditores realizan el trabajo de campo para los trabajos de auditoría a través de documentos de trabajo con preguntas que evalúan cada asunto.</p>' +
                                  '<p>Al crear un compromiso de auditoría, el coordinador de auditoría le proporciona un nombre único. Se deben seleccionar un plan y objetivos de auditoría y también pueden ser creados en esta sección, ' +
                                  'si es necesario, simplemente escribiendo un nombre y presionando Enter. Estos y otros archivos adjuntos pueden estar asociados con el compromiso.</p>' +
                                  '<p>De forma predeterminada, todos los asuntos asociados con la entidad seleccionada son incluidos en el alcance del compromiso. Los coordinadores de auditoría pueden eliminar cualquier innecesario.</p>' +
                                  '<p>El coordinador de auditoría debe seleccionar a un miembro del personal de auditoría para que sea el auditor líder del compromiso.</p>' +
                                  '<p>Esta persona será responsable de asignar auditores a los documentos de trabajo que se crean automáticamente para cada asunto incluido en el alcance una vez que se guarda el compromiso. ' +
                                  'El auditor líder también es responsable de revisar el trabajo de campo realizado por cada auditor.</p>' +
                                  '<p>El coordinador de auditoría también debe seleccionar a los miembros del personal de auditoría para que se incluyan como auditores en el compromiso. Observe que cada documento de trabajo debe tener un auditor asignado, ' +
                                  'quien será responsable de gestionar las preguntas y evaluar las respuestas de los auditados en ese documento de trabajo. La cantidad máxima de horas que cada auditor debería trabajar en el compromiso puede ser especificada, ' +
                                  'y luego la cantidad de horas realmente trabajadas puede ser agregada a los partes de horas en la sección Gestionar Recursos de este módulo.</p>',
                universeHelpTextTitle: 'Descripción',
                engagementHelpTextTitle: 'Ejecutar Compromisos de Auditoría',
                engagementPlanningHelpText: '<p>Una vez que los coordinadores de auditoría crean compromisos de auditoría, el trabajo de campo relacionado puede ser ejecutado por los auditores en esta sección. ' +
                                            'Esto se hace a través de documentos de trabajo con preguntas que evalúan los controles relacionados con cada asunto. Al ejecutar un compromiso de auditoría, los auditores pueden acceder a las pestañas Planificación y Documentos de Trabajo.</p>' +
                                            '<p><strong>Pestaña Planificación</strong></p>' +
                                            '<p>Permite que cualquier información provista cuando el compromiso fue creado sea visualizada y modificada por el auditor líder, si es necesario, para mantener el compromiso actualizado.</p>' +
                                            '<p>El nombre del compromiso de auditoría debe ser único. Se deben seleccionar un plan y objetivos de auditoría y también se pueden crear en esta sección, si es necesario, simplemente escribiendo ' +
                                            'un nombre para ellos y presionando Enter. Los archivos adjuntos también se pueden cargar para proporcionar información adicional.</p>' +
                                            '<p>De forma predeterminada, todos los asuntos asociados con la entidad seleccionada se incluyen en el alcance del compromiso. Los coordinadores de auditoría pueden eliminar cualquier innecesario.</p>' +
                                            '<p>El coordinador de auditoría debe seleccionar a un miembro del personal de auditoría para que sea el auditor líder del trabajo. Esta persona será responsable de asignar auditores a los documentos ' +
                                            'de trabajo que se crean automáticamente para cada asunto incluido en el alcance una vez que se guarda el compromiso. El auditor líder también es responsable de revisar el trabajo de campo realizado por cada auditor.</p>' +
                                            '<p>El coordinador de auditoría también debe seleccionar a los miembros del personal de auditoría para que se incluyan como auditores en el trabajo. Tenga en cuenta que cada documento de trabajo debe tener un auditor asignado, ' +
                                            'quien será responsable de gestionar y evaluar las respuestas de los auditados en ese documento de trabajo. La cantidad máxima de horas que cada auditor debería trabajar en el compromiso puede ser especificada, ' +
                                            'y luego se puede agregar la cantidad de horas realmente trabajadas a las hojas de tiempo en la sección Gestionar Recursos de este módulo.</p>' +
                                            '<p>Una vez que todos los documentos de trabajo asociados con un compromiso de auditoría han sido evaluados por los auditores, y una vez que se han tomado en consideración las notas de revisión ' +
                                            'proporcionadas por el auditor líder, el auditor líder puede cerrar el trabajo. Tenga en cuenta que no se puede deshacer esta acción.</p>' +
                                            '<p><strong>Pestaña Documentos de Trabajo</strong></p>' +
                                            '<p>Esta pestaña muestra una lista de los documentos de trabajo creados automáticamente para todos los asuntos incluidos en el alcance del compromiso. Las columnas muestran el auditor asignado, ' +
                                            'el número de preguntas creadas y contestadas, el porcentaje de progreso con respecto a las preguntas contestadas y el estado de aprobación y revisión del documento de trabajo. Se puede acceder a cada documento de trabajo haciendo clic en el nombre del asunto.</p>',
                workingPaperHelpTextTitle: 'Documento de Trabajo',
                workingPaperHelpText: '<p><strong>Pestaña General</strong></p>' +
                                      '<p>Esta pestaña muestra información general sobre el documento de trabajo.</p>' +
                                      '<p>Aquí, el auditor principal debe asignar un auditor al documento de trabajo, a quien se le notificará por correo electrónico. El auditor líder puede proporcionar una descripción del documento de trabajo, ' +
                                      'además de los procedimientos de evaluación y las recomendaciones que deben seguir los auditores durante el compromiso. También se pueden cargar los archivos adjuntos, lo que será visible para los auditores.</p>' +
                                      '<p>El trabajo de campo para los compromisos de auditoría se realiza a través de documentos de trabajo con preguntas que evalúan cada asunto. El auditor será responsable de crear o importar estas preguntas ' +
                                      'en la pestaña Cuestionario, evaluar las respuestas proporcionadas por los auditados y reportar cualquier constatación encontrada en el proceso para las preguntas evaluadas como no conformes ' +
                                      'o que necesitan mejoras. Tenga en cuenta que la pestaña Cuestionario solo se habilita después de asignar un auditor al documento de trabajo.</p>' +
                                      '<p>Una vez que el auditor termina de evaluar las respuestas y justificaciones proporcionadas por los auditados, el auditor debe evaluar el documento de trabajo, aprobándolo o rechazándolo. Observe que un documento de trabajo solo puede ser evaluado una vez que se hayan evaluado todas las preguntas. ' +
                                      'El auditor principal será notificado por correo electrónico para revisar el documento de trabajo. Una vez aprobado o rechazado un documento de trabajo, todas las preguntas y respuestas serán bloqueadas para su edición.</p>' +
                                      '<p>Una vez que el auditor principal revisa las respuestas y justificaciones y proporciona notas de revisión, el estado de revisión debe cambiarse a "Revisado". El auditor será notificado por correo electrónico para ' +
                                      'revisar las notas proporcionadas por el auditor líder. Con base en la información proporcionada por el auditor líder, el auditor puede volver a evaluar un documento de trabajo si es necesario.</p>' +
                                      '<p>Un documento de trabajo puede ser suspendido en cualquier momento. Una vez que se suspende, las preguntas son bloqueadas para su edición por los auditores y auditados hasta que se reanude.</p>' +
                                      '<p><strong>Pestaña Cuestionario</strong></p>' +
                                      '<p>El trabajo de campo para los compromisos de auditoría se realiza a través de documentos de trabajo con preguntas que evalúan cada asunto. En esta pestaña, el auditor debe crear estas preguntas, ' +
                                      'que serán respondidas por los auditados para permitir una evaluación del tema asociado con el documento de trabajo.</p>' +
                                      '<p>Para cada pregunta, el auditor debe definir las opciones de respuesta disponibles, el auditado responsable de responder la pregunta y una fecha límite, que puede ser utilizada para definir la prioridad de la pregunta. ' +
                                      'Observe que los auditados deben estar registrados como personas en el módulo Organización antes de que puedan ser asignados. Las preguntas también pueden ser eliminadas o modificadas si ya no son necesarias. ' +
                                      'Los auditados recibirán una notificación por correo electrónico cada vez que se cree, modifique o elimine una pregunta asignada después de que se haya iniciado el compromiso, y podrán visualizarlos y responderlos utilizando el Portal de Auditoría en el módulo Mi Espacio.</p>' +
                                      '<p>Se pueden utilizar conjuntos de respuestas predefinidos o se pueden crear nuevos conjuntos. Observe que los nuevos conjuntos no se guardarán ni los cambios se guardarán en conjuntos predefinidos. ' +
                                      'Los auditores pueden ingresar respuestas en nombre de los auditados en caso de que no tengan acceso al sistema. En este caso, los auditados no serán notificados ni podrán visualizar estas preguntas en el Portal de Auditoría.</p>' +
                                      '<p>Al responder preguntas en el Portal de Auditoría, los auditados también pueden proporcionar justificaciones y utilizar el área de conversación para dejar mensajes y enviar archivos adjuntos a los auditores.</p>' +
                                      '<p>Para crear cuestionarios, los auditores pueden importar preguntas de otros compromisos, en cuyo caso se importarán con las mismas opciones de respuesta. ' +
                                      'De forma predeterminada, el auditor que importa las preguntas será asignado como auditado, y la fecha de finalización planificada del compromiso se utilizará como fecha límite. Estos pueden ser modificados si es necesario.</p>' +
                                      '<p>Se notificará al auditor por correo electrónico cuando un auditado envíe una respuesta a una pregunta, después de lo cual el auditor debe evaluar la respuesta. ' +
                                      'Al evaluar una pregunta, el auditor también debe ingresar una respuesta en nombre del auditado si se seleccionó esta opción cuando se creó la pregunta.</p>' +
                                      '<p>Los auditores pueden informar los resultados de la auditoría a partir de preguntas evaluadas como no conformes o que necesitan mejoras. Estos se crearán como eventos de tipo de búsqueda de auditoría en el módulo Workflow, para que se puedan tratar adecuadamente.</p>' +
                                      '<p>Una vez que el auditor termina de evaluar las preguntas de un documento de trabajo, debe aprobar o rechazar el documento de trabajo en la pestaña General.</p>',
                portalHelpTextTitle: 'Portal de Auditoría',
                portalHelpText: '<p>El Portal de Auditoría muestra una lista de todos los compromisos con preguntas asignadas a usted.</p>' +
                                '<p>Cuando hace clic en un compromiso, verá todas las preguntas de ese compromiso al que fue asignado como auditado. Luego debe seleccionar una respuesta para cada pregunta, ' +
                                'y también se puede proporcionar una justificación. También puede utilizar el área de conversación para enviar mensajes y archivos a los auditores.</p>' +
                                '<p>Una vez que esté satisfecho con su respuesta, puede enviarla para que el auditor pueda comenzar la evaluación. Debe enviar la respuesta para cada pregunta por separado. ' +
                                'Observe que cada pregunta tiene una fecha límite, y puede utilizar las opciones de filtro y clasificación para mostrar las preguntas según su estado o fecha límite.</p>',
                resourcesHelpTextTitle: 'Gestionar Recursos de Auditoría',
                resourcesHelpText: '<p><strong>Personal</strong></p>' +
                                   '<p>Las personas previamente registradas en el módulo Organización deben ser agregadas como miembros del personal de auditoría para que puedan ser asignadas a roles relacionados con la auditoría.</p>' +
                                   '<p>Al agregar personas al personal de auditoría, se debe especificar su posición y región. Sus habilidades y certificaciones se pueden seleccionar o, si es necesario, ' +
                                   'crear en esta sección simplemente escribiendo un nombre y presionando Enter. La región, las habilidades y las certificaciones de los miembros del personal de auditoría se mostrarán a los coordinadores de auditoría cuando se les asigne un compromiso.</p>' +
                                   '<p>Estos campos pueden ser modificados más tarde si es necesario, y los miembros del personal también pueden ser eliminados. Observe que, si una persona asignada a un compromiso se elimina del personal de auditoría o del sistema, la palabra "eliminado" se mostrará entre paréntesis junto al nombre de la persona cuando corresponda.</p>' +
                                   '<p><strong>Partes de Horas</strong></p>' +
                                   '<p>Los auditores pueden registrar las horas trabajadas en los compromisos utilizando partes de horas que pueden ser aprobados o rechazados. Observe que solo puede crear partes de horas para sus propias horas.</p>' +
                                   '<p>Al crear un parte de horas, debe ingresar las actividades realizadas, el compromiso asociado, la fecha en que se realizaron y el número de horas dedicadas a ellas. Opcionalmente, se puede proporcionar una descripción. Los partes de horas pueden ser modificados o eliminados según sea necesario.</p>',
            },
            table: {
                riskType: 'Tipo de Riesgo',
                riskName: 'Declaración de Riesgo',
                riskOwner: 'Propietario del Riesgo',
                riskSource: 'Fuente de Riesgo',
                riskSource_0: 'Riesgos Corporativos',
                riskSource_1: 'Auditoría',
                processAssociated: 'Proceso Asociado',
                subjectColumn: 'Asunto',
                functionColumn: 'Función',
                entityColumn: 'Entidad',
                lastAssessment: 'Última Evaluación',
                controls: 'Controles',
                riskRating: 'Clasificación de Riesgos',
                auditFunction: 'Función de Auditoría',
                auditEntity: 'Entidad de Auditoría',
                auditSubject: 'Asunto de Auditoría',
                rating: 'Clasificación de Control de Auditoría',
                inherentRisk: 'Riesgo Inherente',
                residualRisk: 'Riesgo Residual',
                effort: 'Días de Trabajo Estimados',
                responsible: 'Parte Responsable',
                openEngagements: 'Compromisos Abiertos',
                openFindings: 'Constataciones Abiertas',
                risks: 'Riesgos',
                residualRisks: 'Riscos Residuales',
                inherentRisks: 'Riscos Inherentes',
                lastEngagement: 'Último Compromiso',
                name: 'Nombre',
            },
        },
        'de-DE': {
            general: {
                refresh: 'Aktualisieren',
                selectField: 'Auswählen',
                noStaffSelected: 'Es wurde kein Personal ausgewählt.',
                warningLeaveMessage: 'Seite verlassen? \n \n' +
                    'Die Änderungen wurden nicht gespeichert.',
                portalPageTitle: 'Audit-Portal',
                pageTitle: 'Prüfungsumfeld verwalten',
                submitFailed: 'Fehler beim Speichern des Objekts. Überprüfen Sie, ob die Felder ordnungsgemäß ausgefüllt wurden.',
                error: 'Unerwarteter Fehler. Wenden Sie sich an Ihren Systemadministrator.',
                noConnection: 'Fehler bei der Verbindungsherstellung mit dem Server. Wenden Sie sich an Ihren Systemadministrator.',
                moduleName: 'Prüfungsumfeld',
                search: 'Suche',
                required: 'Dies ist ein Pflichtfeld.',
                accessDenied: 'Sie haben keine Berechtigung, diese Operation auszuführen.',
                noData: 'Es wurden keine Ergebnisse gefunden.',
                notFound: 'Objekt nicht gefunden.',
                notAuthorized: 'Zugriff verweigert.',
                presentationMode: 'Betätigen Sie die ESC-Taste, um den Vollbildmodus zu verlassen.',
                showMore: 'Mehr anzeigen...',
                fetchError: 'Unerwarteter Fehler. Status-Code: %{status}',
            },
            pagination: {
                firstQuestion: 'Erste Frage',
                prevQuestion: 'Vorherige Frage',
                nextQuestion: 'Nächste Frage',
                lastQuestion: 'Letzte Frage',
                showingFilteredResults: '%{start} - %{end} von %{totalFiltered} Ergebnissen, gefiltert aus %{total}, werden angezeigt',
                page: 'Seite',
                firstPage: 'Erste Seite',
                prevPage: 'Vorherige Seite',
                nextPage: 'Nächste Seite',
                lastPage: 'Letzte Seite',
                showingResults: 'Showing %{start}–%{end} of %{total} results',
                of: 'von',
            },
            filters: {
                sortBy: 'Ordnen nach:',
                filterBy: 'Filtern nach:',
                clearFilters: 'Filter löschen',
                inProgress: 'Wird verarbeitet',
                notStarted: 'Nicht gestartet',
                blocked: 'Gesperrt',
                answered: 'Beantwortet',
                deadline: 'Ablauffrist',
                subject: 'Prüfobjekt',
            },
            prompt: {
                save: 'Speichern',
                cancel: 'Abbrechen',
                back: 'Zurück',
            },
            combo: {
                createNewOption: 'Neue Option',
                select: 'Zum Auswählen, hier tippen',
                clearAll: 'Alle entfernen',
                clear: 'Entfernen',
                noResults: 'Es wurden keine Ergebnisse gefunden',
                loading: 'Wird geladen...',
                showMore: 'Mehr anzeigen',
            },
            buttons: {
                close: 'Abschließen',
                closeEngagement: 'Prüfungsauftrag abschließen',
                approve: 'Genehmigen',
                suspend: 'Einstellen',
                resume: 'Fortsetzen',
                reject: 'Ablehnen',
                reevaluate: 'Erneut bewerten',
                import: 'Importieren',
                submitQuestionnaire: 'Antwort senden',
                answer: 'Antwort',
                notify: 'Benachrichtigen',
                saveAndNotifyAuditee: 'Speichern und geprüfte Stelle benachrichtigen',
                send: 'Senden',
                create: 'Erstellen',
                add: 'Hinzufügen',
                save: 'Speichern',
                saveAndNext: 'Speichern und fortfahren',
                cancel: 'Abbrechen',
                disassociate: 'Zuordnung aufheben',
                remove: 'Gelöscht',
            },
            validations: {
                required: 'Dies ist ein Pflichtfeld.',
                minLength: 'In diesem Feld sind mindestens %{rule} Zeichen erforderlich.',
                maxLength: 'In diesem Feld sind maximal %{rule} Zeichen erlaubt.',
                minValue: 'Der Betrag muss größer als %{rule} sein.',
                maxValue: 'Der Betrag muss kleiner als %{rule} sein.',
                maxDecimals: 'In diesem Feld sind maximal %{rule} Dezimalstellen erlaubt.',
                zeroDecimals: 'In diesem Feld sind keine Dezimalstellen erlaubt.',
                maxFileSize: 'Die Dateigröße muss kleiner als %{rule} MB sein.',
                minFileSize: 'Die Dateigröße muss mindestens %{rule} Byte betragen.',
                fileTypes: 'Die folgenden Dateitypen sind erlaubt: %{rule}.',
                maxFiles: 'In diesem Feld sind maximal %{rule} Dateien erlaubt.',
                validateVersion: 'Die neue Versionsnummer muss größer als die aktuelle Version sein.',
                sanitize: 'In diesem Feld ist HTML nicht erlaubt.',
                invalidEmail: 'Diese E-Mail-Adresse ist nicht gültig.',
            },
            riskUnknown: {
                editSuccess: 'Das Risiko wurde gespeichert.',
                notFound: 'Das Risiko wurde nicht gefunden.',
                submitSuccess: 'Das Risiko wurde gespeichert.',
            },
            presetOptions: {
                presets: 'Vorkonfigurierte Antwortoptionen verwenden',
                select: 'Option auswählen',
                maturity: {
                    title: 'Maturität',
                    nonExistent: 'Nicht vorhanden/Unbekannt (Nicht vorhanden)',
                    insufficient: 'Ungenügend/Unangemessen (Initial)',
                    intuitive: 'Intuitiv/Identifiziert (Wiederholbar)',
                    estabilished: 'Festgelegt/Standardisiert (Definiert)',
                    monitored: 'Überwacht/Kontrolliert (Behandelt)',
                    integrated: 'Integriert/Automatisiert (Optimiert)',
                },
                criticality: {
                    title: 'Kritikalität',
                    nonExistent: 'Nicht vorhanden',
                    minor: 'Unbedeutend',
                    significant: 'Bedeutend',
                    critical: 'Kritisch',
                },
                confirmation: {
                    title: 'Bestätigung',
                    compliant: 'Konform',
                    notCompliant: 'Nicht konform',
                    nonApplicable: 'Nicht anwendbar',
                },
                simple: {
                    title: 'Einfach',
                    yes: 'Ja',
                    no: 'Nein',
                    idk: 'Unbekannt',
                },
            },
            tabs: {
                staff: 'Persönlich',
                timesheet: 'Zeitpläne',
                questionnaire: 'Fragebogen',
                planning: 'Planung',
                general: 'Allgemein',
                workingPapers: 'Arbeitsunterlagen',
            },
            staff: {
                pageTitle: 'Audit-Ressourcen verwalten',
                table: {
                    name: 'Name',
                    duty: 'Pflicht',
                    region: 'Region',
                    skill: 'Fähigkeiten',
                    certification: 'Zertifizierungen',
                    createdBy: 'Erstellt von',
                    dateCreated: 'Erstellt von',
                    lastUpdate: 'Letzte Aktualisierung',
                },
                form: {
                    submitStaffMemberSuccess: 'Das Personalmitglied wurde gespeichert.',
                    createStaffMember: 'Personalmitglied hinzufügen',
                    person: 'Person',
                    duty: 'Pflicht',
                    region: 'Region',
                    skills: 'Fähigkeiten',
                    certifications: 'Zertifizierungen',
                },
                edit: {
                    title: 'Personalmitglied bearbeiten',
                },
                delete: {
                    notFound: 'Das Mitglied wurde nicht gefunden.',
                    successStaffMemberRemove: 'Das Personalmitglied wurde entfernt.',
                    title: 'Mitglied entfernen',
                    subTitle: 'Personalmitglied entfernen?',
                    description: 'Diese Person verliert alle Zugriffsberechtigungen auf das Modul "Audit". Sie kann Auditobjekten nicht mehr zugeordnet werden. ' +
                        'Die Markierung (entfernt) wird neben dem Namen der Person angezeigt, falls noch zugeordnete Objekte vorhanden sind.',
                },
            },
            timesheets: {
                pageTitle: 'Audit-Ressourcen verwalten',
                edit: {
                    title: 'Zeitplan bearbeiten',
                },
                delete: {
                    title: 'Zeitplan löschen',
                    subTitle: 'Zeitplan löschen?',
                    description: 'Diese Aktion kann nicht wiederhergestellt werden.',
                    notFound: 'Ihre Anforderung kann nicht ausgeführt werden. Überprüfen Sie, ob Sie über die erforderlichen Berechtigungen verfügen und ob der Zeitplan nicht gelöscht wurde.',
                    successDelete: 'Der Zeitplan wurde gelöscht.',
                },
                form: {
                    submitSuccess: 'Der Zeitplan wurde gespeichert.',
                    staffMember: 'Personalmitglied',
                    activities: 'Aktivität',
                    engagement: 'Prüfungsauftrag',
                    activityDate: 'Aktivitätsdatum',
                    activityHours: 'Aktivitätsuhrzeit',
                    status: 'Status',
                    description: 'Beschreibung',
                    createTimesheet: 'Zeitplan erstellen',
                },
                table: {
                    code: 'Code',
                    staffMember: 'Personalmitglied',
                    activity: 'Aktivität',
                    dateCreated: 'Erstellungsdatum',
                    activityDate: 'Aktivitätsdatum',
                    activityHours: 'Aktivitätsuhrzeit',
                    status: 'Status',
                },
            },
            universeHistory: {
                recycleBin: 'Papierkorb',
                hideTree: 'Strukturansicht verbergen',
                listUniverse: 'Prüfungsumfeld verwalten',
                pageTitle: 'Prüfungsumfeld - Papierkorb',
                tabs: {
                    functions: 'Auditfunktionen',
                    entities: 'Entitäten',
                    subjects: 'Prüfobjekte',
                },
                table: {
                    name: 'Name',
                    description: 'Beschreibung',
                    dateDeleted: 'Löschungsdatum',
                    deletedBy: 'Gelöscht von',
                    oldParent: 'Zuletzt übergeordnet',
                    responsible: 'Verantwortlich',
                    createdOn: 'Erstellungsdatum',
                    updatedOn: 'Aktualisierungsdatum',
                },
            },
            universe: {
                universeEditSuccess: 'Ihre Änderungen wurden gespeichert.',
                name: 'Prüfungsumfeld',
                editSuccess: '%{type} wurde gespeichert.',
                subject: 'Prüfungsobjekt',
                entity: 'Entität',
                function: 'Funktion',
                riskRating: 'Risikopunktzahl',
                edit: {
                    notFound: 'Fehler bei der Ausführung Ihrer Anforderung. Überprüfen Sie, ob Sie über die erforderlichen Berechtigungen verfügen und ob die Entität nicht gelöscht wurde.',
                },
                delete: {
                    notFound: 'Das Prüfobjekt wurde nicht gefunden.',
                    successDeleteSubject: 'Das Prüfobjekt wurde entfernt.',
                    successDeleteFunction: 'Die Auditfunktion wurde gelöscht.',
                    successDeleteEntity: 'Die Entität wurde entfernt.',
                    subjectTitle: 'Prüfobjekt löschen',
                    entityTitle: 'Entität entfernen',
                    functionTitle: 'Funktion entfernen',
                    subjectSubTitle: 'Prüfobjekt löschen?',
                    subjectDescription: 'Das Prüfobjekt wird in den Papierkorb verschoben. ' +
                        'Sie können es nicht mehr zum Umfang neuer Prüfungsaufträge hinzufügen ' +
                        'und die Markierung "gelöscht" wird neben zugeordnetenen Objekten angezeigt.',
                    functionSubTitle: 'Funktion löschen?',
                    functionDescription: 'Die Funktion wird in den Papierkorb verschoben ' +
                        'und die Markierung "gelöscht" wird neben zugeordneten Objekten angezeigt.',
                    entitySubTitle: 'Entität löschen?',
                    entityDescription: 'Die Entität wird in den Papierkorb verschoben. ' +
                        'Sie können sie nicht mehr zum Umfang neuer Prüfungsaufträge hinzufügen ' +
                        'und die Markierung "gelöscht" wird neben zugeordneten Objekten angezeigt.',
                },
                summary: {
                    editUnknownRisk: 'Auditrisiko bearbeiten',
                    riskAssociations: 'Risikozuordnungen',
                    riskDesassociation: 'Risikozuordnung aufheben',
                    manageRiskAssociations: 'Unternehmensrisiken zuordnen',
                    openEngagements: 'Offene Prüfungsaufträge',
                    openFindings: 'Offene Prüfungsfeststellungen',
                    risks: 'Risiken',
                    residualRisks: 'Restrisiken',
                    inherentRisks: 'Inhärente Risiken',
                },
                auditFunction: {
                    create: 'Auditfunktion erstellen',
                    createSuccess: 'Die Auditfunktion wurde erstellt.',
                    form: {
                        type: 'Typ',
                        parent: 'Übergeordnet',
                        name: 'Name',
                        responsible: 'Verantwortlich',
                        description: 'Beschreibung',
                        additionalInfo: 'Zusätzliche Informationen',
                    },
                },
                auditableEntity: {
                    create: 'Entität erstellen',
                    createSuccess: 'Die Entität wurde erstellt.',
                    tabs: {
                        general: 'Allgemein',
                        details: 'Details',
                    },
                    form: {
                        type: 'Typ',
                        parent: 'Übergeordnet',
                        name: 'Name',
                        responsible: 'Verantwortlich',
                        description: 'Beschreibung',
                        additionalInfo: 'Zusätzliche Informationen',
                    },
                },
                auditSubject: {
                    create: 'Prüfobjekt erstellen',
                    createSuccess: 'Das Prüfobjekt wurde erstellt.',
                    associationSuccess: 'Die Risiken wurden dem Prüfungsobjekt zugeordnet.',
                    desassociationSuccess: 'Die Risikozuordnung mit dem Prüfobjekt wurde aufgehoben.',
                    desassociation: {
                        title: 'Zuordnung zwischen Risiko "%{risk}" und Prüfobjekt aufheben?',
                        description: 'Die Risikozuordnung wird aufgehoben und aus der Liste entfernt. Aktuelle Prüfungsaufträge bleiben unverändert.',
                    },
                    tabs: {
                        general: 'Allgemein',
                        details: 'Details',
                    },
                    form: {
                        type: 'Typ',
                        parent: 'Übergeordnet',
                        name: 'Name',
                        responsible: 'Verantwortlich',
                        description: 'Beschreibung',
                        additionalInfo: 'Zusätzliche Informationen',
                    },
                },
            },
            questionnaire: {
                noQuestions: 'In diesem Fragebogen sind Ihnen keine Fragen zugeordnet.',
                workingPaperApproved: 'Ihre Antwort kann nicht gesendet werden, da der Auditor die Bewertung dieses Fragebogens abgeschlossen hat.',
                saveQuestionNotFound: 'Diese Frage wurde bearbeitet und die Seite wurde aktualisiert.',
                pageTitle: 'Audit-Fragen',
                listQuestionnaires: 'Prüfungsaufträge aufführen',
                auditEngagement: 'tePrüfungsauftrag',
                auditor: 'Auditor',
                totalQuestions: 'Fragen',
                answeredQuestions: 'Beantwortete Fragen',
                questionWasDeletedMessage: 'Dieser Fragebogen wurde bearbeitet und die Seite wurden aktualisiert.',
                progressTitle: '% Abgeschlossen',
                progress: '%{answered} von %{total} beantwortet (%{percent}%)',
                lastUpdate: 'Aktualisierungsdatum',
            },
            chat: {
                send: 'Senden',
                attachment: 'Anlage',
                canBeDownloaded: 'Nach dem Nachrichtenversand kann diese Datei heruntergeladen werden.',
                comments: 'Bemerkungen',
                titlePrefix: 'Antwort an',
                titleOwnChatMessage: 'Sie',
            },
            engagement: {
                summaryTitle: 'Prüfungsauftragsaktionen',
                editEngagement: 'Prüfungsauftrag ausführen',
                workingPapersTitle: 'Arbeitsunterlagen',
                listWorkingPapers: 'Zurück zu Arbeitsunterlagen',
                backEngagement: 'Zurück zu Prüfungsauftrag',
                singleEngagementPageTitle: 'Prüfungsauftrag',
                listEngagements: 'Prüfungsaufträge ausführen',
                pageTitle: 'Prüfungsaufträge ausführen',
                create: 'Prüfungsauftrag erstellen',
                createSuccess: 'Der Prüfungsauftrag wurde erstellt.',
                hours: 'Geplante Stunden',
                summary: {
                    author: 'Autor',
                    dateCreated: 'Erstellungsdatum',
                    dateUpdated: 'Aktualisierungsdatum',
                    updatedBy: 'Aktualisiert von',
                    status: 'Status',
                    code: 'Code',
                    analysisStartDate: 'Analysestart',
                    analysisEndDate: 'Analyseende',
                    title: 'Auftragsinformationen',
                    actions: 'Umfrageaktionen kontrollieren',
                    save: 'Speichern',
                },
                popup: {
                    closeTitle: 'Prüfungsauftrag abschließen?',
                    closeSuccess: 'Der Prüfungsauftrag wurde abgeschlossen.',
                    closeDescription: 'Diese Aktion kann nicht wiederhergestellt werden. Nachdem der Prüfungsauftrag abgeschlossen wurde, wird er permanent schreibgeschützt und die Arbeitsunterlagen können nicht erneut bewertet werden.',
                    closeHeader: 'Prüfungsauftrag abschließen',
                },
                workingPapers: {
                    popup: {
                        approve: {
                            header: 'Arbeitsunterlage genehmigen',
                            title: 'Arbeitsunterlage genehmigen?',
                            description: 'Der leitende Auditor wird über die Prüfung des Fragebogens benachrichtigt. Alle Fragen werden gesperrt und können nicht mehr im Portal aufgerufen werden.',
                            success: 'Die Arbeitsunterlage wurde genehmigt. Der leitende Auditor wurde benachrichtigt, um sie zu prüfen.',
                        },
                        reject: {
                            header: 'Arbeitsunterlage ablehnen',
                            title: 'Arbeitsunterlage ablehnen?',
                            description: 'Der leitende Auditor wird über die Prüfung des Fragebogens benachrichtigt. Alle Fragen werden gesperrt und können nicht mehr im Portal aufgerufen werden.',
                            success: 'Die Arbeitsunterlage wurde abgelehnt. Der leitende Auditor wurde benachrichtigt, um sie zu prüfen.',
                        },
                        suspend: {
                            header: 'Arbeitsunterlage einstellen',
                            title: 'Feldarbeit an Arbeitsunterlage einstellen?',
                            description: 'Der Fragebogen wird gesperrt, bis die Feldarbeit fortgesetzt wird.',
                            success: 'Die Arbeitsunterlage wurde eingestellt. Sie kann nicht bearbeitet werden, bis sie wieder aufgenommen wird.',
                        },
                        resume: {
                            header: 'Arbeitsunterlage fortsetzen',
                            title: 'Feldarbeit an Arbeitsunterlage fortsetzen?',
                            description: 'Der Fragebogen kann von Prüfern bearbeitet werden und die Fragen stehen den Befragten im Audit-Portal zur Verfügung.',
                            success: 'Die Arbeitsunterlage wurde wieder aufgenommen und kann jetzt bearbeitet werden.',
                        },
                        reevaluate: {
                            header: 'Arbeitsunterlage erneut bewerten',
                            title: 'Arbeitsunterlage erneut bewerten?',
                            description: 'Der Fragebogen kann von Auditoren bearbeitet werden und die Fragen stehen den Befragten im Audit-Portal zur Verfügung.',
                            success: 'Die Arbeitsunterlage kann jetzt genehmigt oder abgelehnt werden.',
                        },
                        unblockQuestion: {
                            header: 'Frage entsperren',
                            title: 'Diese Frage entsperren?',
                            description: 'Die Frage und ihre Antwort können nun bearbeitet werden. Sie werden im Audit-Portal angezeigt, falls der Auditor nicht zugeordnet wurde, um sie im Namen der auditierten Stelle zu beantworten.',
                            success: 'Die Frage und ihre Antwort können nun bearbeitet werden.',
                        },
                    },
                    summaryTitle: 'Arbeitsunterlagenaktionen',
                    importQuestions: 'Fragen importieren',
                    notifyUpdates: 'Über Aktualisierungen benachrichtigen',
                    notifySent: 'Die Frage wurde gespeichert und die geprüfte Stelle wurde benachrichtigt.',
                    deleteQuestionSuccess: 'Die Frage wurde gelöscht.',
                    questionNotFound: 'Die Frage wurde nicht gefunden.',
                    deleteTitle: 'Frage löschen',
                    deleteSubTitle: 'Diese Frage löschen?',
                    deleteDescription: 'Nach der Löschung kann diese Frage nicht mehr beantwortet oder kommentiert werden. \n \n' +
                                       'Außerdem werden Informationen, die die geprüfte Stelle bereits eingegeben hatte, ebenfalls gelöscht.',
                    questionContainer: 'Fragen',
                    pageTitle: 'Arbeitsunterlagen des Prüfungsauftrags',
                    questionSubmitSuccess: 'Die Frage wurde gespeichert.',
                    saveQuestionSuccess: 'Die Frage wurde gespeichert.',
                    answerQuestionSuccess: 'Die Antwort wurde gesendet.',
                    viewQuestion: 'Frage anzeigen',
                    editQuestion: 'Frage bearbeiten',
                    evaluateQuestion: 'Evaluate Question',
                    createQuestion: 'Frage hinzufügen',
                    saveEvaluationSuccess: 'Die Frage wurde bewertet.',
                    importAllQuestionSuccess: 'Die Fragen wurden importiert.',
                    importPartialQuestionSuccess: '%{total} Fragen konnten nicht importiert werden, da sie aus dem originalen Fragebogen gelöscht wurden.',
                    form: {
                        auditeeNotes: 'Bemerkungen der geprüften Stelle',
                        answer: 'Antworten',
                        justification: 'Begründung',
                        auditorNotes: 'Bemerkungen des Auditors',
                        status: 'Status',
                        question: 'Frage',
                        responseList: 'Antwortoptionen',
                        auditee: 'Geprüfte Stelle',
                        auditor: 'Auditor',
                        auditeeAnswer: 'Antwort der geprüften Stelle:',
                        evaluation: 'Fragebewertung:',
                        auditorObservations: 'Bemerkungen des Auditors',
                        auditeeObservations: 'Bemerkungen der geprüften Stelle',
                        reviewerObservations: 'Bemerkungen des Prüfers',
                        notifyAuditee: 'Geprüfte Stelle nicht benachrichtigen',
                        deadline: 'Ablauffrist',
                        subject: 'Prüfobjekt',
                        workingPaperStatus: 'Status der Arbeitsunterlage',
                        assignedAuditor: 'Auditor',
                        reviewStatus: 'Prüfungsstatus',
                        description: 'Beschreibung',
                        evaluationProcedure: 'Bewertungsverfahren',
                        auditProgram: 'Auditprogramm',
                        recommendations: 'Empfehlungen',
                        risks: 'Associated Risks',
                        answerByAuditor: 'Auditor antwortet im Namen der geprüften Stelle',
                    },
                    workPaperNotFound: 'Die Arbeitsunterlage wurde nicht gefunden.',
                    notFound: 'Der Prüfungsauftrag wurde nicht gefunden.',
                    unblockQuestion: 'Frage entsperren',
                    finding: {
                        popupTitle: 'Feststellungsereignis erstellen',
                        form: {
                            type: 'Ereignistyp',
                            deadline: 'Ablauffrist',
                            title: 'Titel',
                            description: 'Beschreibung',
                            urgency: 'Dringlichkeit',
                            severity: 'Schadensschwere',
                            relevance: 'Relevanz',
                            coordinator: 'Koordinator',
                            responsible: 'Verantwortlich',
                            person: 'Person',
                            group: 'Gruppe',
                        },
                        ratingScale: {
                            veryLow: 'Sehr niedrig',
                            low: 'Niedrig',
                            medium: 'Mittel',
                            high: 'Hoch',
                            veryHigh: 'Sehr hoch',
                        },
                        eventTypes: {
                            auditFinding: 'Feststellungsereignis',
                        },
                        openFindingSuccess: 'Das Feststellungsereignis wurde erstellt',
                    },
                },
                table: {
                    subject: 'Prüfobjekt',
                    dateSent: 'Erstellungsdatum',
                    dateUpdated: 'Aktualisierungsdatum',
                    questions: 'Fragen insgesamt',
                    workingPaperStatus: 'Status der Arbeitsunterlage',
                    answered: 'Beantwortete Fragen',
                    answerStatus: 'Fragestatus',
                    question: 'Frage',
                    deadline: 'Ablauffrist',
                    answer: 'Antwort',
                    auditeeObservations: 'Bemerkungen der geprüften Stelle',
                    auditeeNotes: 'Bemerkungen der geprüften Stelle',
                    progress: '% Fortschritt',
                    code: 'Code',
                    engagementName: 'Name',
                    auditPlan: 'Auditplan',
                    auditableEntity: 'Entität',
                    status: 'Genehmigungsstatus',
                    reviewStatus: 'Prüfungsstatus',
                    evaluationStatus: 'Bewertungsstatus',
                    estimatedCost: 'Erwartete Kosten',
                    actualCost: 'Kosten',
                    planStart: 'Planstart',
                    startDate: 'Startdatum',
                    planEnd: 'Planende',
                    endDate: 'Enddatum',
                    openControls: 'Offene Kontrollen',
                    openQuestions: 'Offene Fragen',
                    title: 'Titel',
                    completion: '% Fortschritt',
                    auditee: 'Geprüfte Stelle',
                    auditor: 'Auditor',
                    relevance: 'Relevanz',
                    category: 'Kategorie',
                    type: 'Typ',
                    findingStatus: 'Status der Prüfungsfeststellung',
                    finding: 'Prüfungsfeststellung',
                    author: 'Autor',
                    engagement: 'Prüfungsauftrag',
                    dateCreated: 'Erstellungsdatum',
                    leadAuditor: 'Leitender Auditor',
                    menu: {
                        reportFinding: 'Feststellung berichten',
                    },
                },
                form: {
                    attachments: 'Anlagen',
                    title: 'Titel',
                    type: 'Typ',
                    category: 'Kategorie',
                    auditee: 'Geprüfte Stelle',
                    auditor: 'Auditor',
                    statement: 'Verfahrensanweisung',
                    createControl: 'Kontrolle erstellen',
                    entity: 'Entität',
                    submitControlSurveySuccess: 'Die Umfrage wurde gespeichert.',
                    origin: 'Ursprung',
                    likelihood: 'Eintrittswahrscheinlichkeit',
                    impact: 'Auswirkung',
                    risksAssociations: 'Risikozuordnungen',
                    registerAuditRisk: 'Auditrisiko registrieren',
                    registerCaption: 'Registrieren',
                    associateCaption: 'Zuordnen',
                    name: 'Name',
                    auditPlan: 'Auditplan',
                    scopeSubject: 'Umfang des Prüfungsobjekts',
                    leadAuditor: 'Leitender Auditor',
                    plannedStartDate: 'Geplantes Startdatum',
                    plannedEndDate: 'Geplantes Enddatum',
                    estimatedCost: 'Erwartete Kosten',
                    objectives: 'Ziele',
                    staff: 'Ressourcen',
                    description: 'Beschreibung',
                    narrative: 'Beschreibung',
                },
                staff: {
                    staffMemberAlreadyAdded: 'Dieses Personalmitglied wurde bereits zum Prüfungsauftrag hinzugefügt.',
                    role: 'Position',
                    certifications: 'Zertifizierungen',
                    name: 'Name',
                    plannedHours: 'Stunden',
                    region: 'Region',
                },
                questions: {
                    deleteQuestionAlert: 'Die Frage und Informationen von Befragten werden gelöscht und können nicht wiederhergestellt werden.',
                    deleteQuestionFindingsAlert: 'Prüfen Sie die zugeordneten Prüffeststellungen, um zu versichern, dass angemessene Maßnahmen ergriffen wurden. Löschen Sie bei Bedarf nicht verwendete Ereignisse.',
                    warnFindingWhenEvaluationStatusAlertTitle: 'Status dieser Frage ändern?',
                    warnFindingWhenEvaluationStatusAlert: 'Diese Frage hat zugeordnete Feststellungen, die nicht von dieser Änderung betroffen werden und die eventuell geprüft werden müssen.',
                },
            },
            help: {
                importQuestions: {
                    title: 'Warnung:',
                    message: 'Die Fragen werden mit denselben Antwortoptionen importiert. Sie werden als geprüfte Stelle zugeordnet und das geplante Enddatum des Prüfungsauftrags wird als Ablauffrist verwendet. Diese können später bei Bedarf geändert werden.',
                },
                universeHelpText: '<p>In diesem Abschnitt können Sie das Prüfungsumfeld verwalten und Prüfungsaufträge erstellen.</p>' +
                                  '<p><strong>Prüfungsumfeld verwalten</strong></p>' +
                                  '<p>Zunächst sollten Sie Ihre Auditfunktionen, Entitäten und Prüfobjekte registrieren. Entitäten stellen auditierbare Organisationseinheiten dar. Diese werden unter Auditfunktionen registriert, ' +
                                  'die die für Prüfungsaufträge verantwortlichen Abteilungen repräsentieren. Prüfobjekte sind Schlüsselthemen zu einer Entität, die in Prüfungsaufträgen bewertet werden. ' +
                                  'Prüfungsaufträge können nur erstellt werden, wenn die Entitäten über registrierte Prüfobjekte verfügen.</p>' +
                                  '<p>Anschließend können Sie Prüfobjekten Risiken zuordnen. Auf diese Weise werden Prüfungsaufträge für Entitäten je nach zugeordneten Risiken ihrer Prüfobjekte priorisiert. ' +
                                  'Sie können Risiken aus dem Modul „Unternehmensrisiko“ zuordnen oder nicht zugeordnete Risiken registrieren, die bei der Vorbereitung eines Prüfungsauftrags identifiziert wurden. ' +
                                  'Hier registrierte Risiken sind ausschließlich im Modul „Audit“ zur Zuordnung mit anderen Prüfobjekten verfügbar.</p>' +
                                  '<p>Bevor Sie einen Prüfungsauftrag erstellen können, müssen Sie Ihr Auditpersonal im Abschnitt „Audit-Ressourcen verwalten“ dieses Moduls registrieren. Beachten Sie, dass Personen im Modul ' +
                                  '„Organisation“ registriert werden müssen, bevor sie zum Auditpersonal hinzugefügt oder als auditierte Stellen zugeordnet werden können, um Fragen in Prüfungsaufträgen zu beantworten.</p>' +
                                  '<p>Das Prüfungsumfeld muss regelmäßig geprüft werden, um Änderungen im allgemeinen Risikoprofil der Organisation widerzuspiegeln. Sie können Objekte nach Bedarf erstellen, ' +
                                  'bearbeiten, verschieben oder löschen. Gelöschte Objekte werden zum Papierkorb gesendet, sodass Sie wichtige Änderungen im Prüfungsumfeld überwachen können.</p>' +
                                  '<p>Wenn Sie Objekte (Funktionen, Entitäten und Prüfobjekte) bearbeiten, werden die aktuellen Prüfungsaufträge nicht beeinflusst. Außerdem können Objekte im Umfang der aktuell ausgeführten Prüfungsaufträge nicht gelöscht werden.</p>' +
                                  '<p><strong>Prüfungsaufträge erstellen</strong></p>' +
                                  '<p>Nach der Registrierung des Prüfungsumfelds und des Auditpersonals können Auditkoordinatoren Prüfungsaufträge erstellen, um Prüfobjekte, die jeder Entität zugeordnet sind, zu bewerten. ' +
                                  'Auditoren führen die Feldarbeit für Prüfungsaufträge in Arbeitsunterlagen mit Fragen aus, wobei jedes Prüfobjekt bewertet wird.</p>' +
                                  '<p>Beim Erstellen eines Prüfungsauftrags gibt der Auditkoordinator einen eindeutigen Namen dafür ein. Ein Auditplan und ein Ziel müssen ausgewählt werden und können in diesem Abschnitt ' +
                                  'bei Bedarf erstellt werden, indem Sie einfach einen Namen eingeben und die Enter-Taste betätigen. Diese und andere Anlagen können dem Prüfungsauftrag zugeordnet werden.</p>' +
                                  '<p>Standardmäßig werden alle Prüfobjekte, die der ausgewählten Entität zugeordnet wurden, zum Umfang des Prüfungsauftrags hinzugefügt. Auditkoordinatoren können sie entfernen, wenn sie nicht mehr notwendig sind.</p>' +
                                  '<p>Der Auditkoordinator muss auch ein Mitglied des Auditpersonals auswählen, der als leitender Auditor zum Prüfungsauftrag hinzugefügt wird.</p>' +
                                  '<p>Diese Person ist verantwortlich, Auditoren zu Arbeitsunterlagen zuzuordnen, die automatisch für jedes Prüfobjekt im Umfang des Prüfungsauftrags erstellt wird. ' +
                                  'Der leitende Auditor ist auch für die Prüfung der Feldarbeit verantwortlich, die von jedem Auditor ausgeführt wird.</p>' +
                                  '<p>Der Auditkoordinator muss auch die Mitglieder des Auditpersonals auswählen, um sie als Auditoren zum Prüfungsauftrag hinzuzufügen. Jede Arbeitsunterlage muss einem Auditor zugeordnet sein, ' +
                                  'der verantwortlich ist, die Antworten der auditierten Stellen in dieser Arbeitsunterlage zu bewerten und zu verwalten. Die maximale Stundenanzahl, an der jeder Auditor an der Arbeitsunterlage arbeiten soll, ' +
                                  'kann definiert werden und später kann die Anzahl der Stunden, die tatsächlich verwendet wurden, zu den Zeitplänen im Abschnitt „Ressourcen verwalten“ dieses Moduls hinzugefügt werden.</p>',
                universeHelpTextTitle: 'Prüfungsumfeld verwalten',
                engagementHelpTextTitle: 'Prüfungsaufträge ausführen',
                engagementPlanningHelpText: '<p>Anschließend kann die jeweilige Feldarbeit von Auditoren in diesem Abschnitt ausgeführt werden. Dies wird durch Arbeitsunterlagen mit Fragen ausgeführt, ' +
                                            'die Kontrollen zu jedem Prüfobjekt bewerten. Wenn ein Prüfungsauftrag ausgeführt wird, können Auditoren auf die Registerkarten „Planung“ und „Arbeitsunterlagen“ zugreifen.</p>' +
                                            '<p><strong>Registerkarte „Planung“</strong></p>' +
                                            '<p>Informationen zum Prüfungsauftrag können eingegeben werden, die von dem leitenden Auditor angezeigt werden können, um den Prüfungsauftrag bei Bedarf zu aktualisieren.</p>' +
                                            '<p>Der Name des Prüfungsauftrags muss eindeutig sein. Ein Auditplan und Ziele müssen ausgewählt werden und können auch in diesem Abschnitt bei Bedarf erstellt werden, ' +
                                            'indem Sie einfach einen Namen dafür eingeben und die Enter-Taste betätigen. Anlagen können hochgeladen werden, um zusätzliche Informationen zu bereitzustellen.</p>' +
                                            '<p>Standardmäßig werden alle Prüfobjekte, die der ausgewählten Entität zugeordnet wurden, zum Umfang des Prüfungsauftrags hinzugefügt. Auditkoordinatoren können sie entfernen, wenn sie nicht mehr notwendig sind.</p>' +
                                            '<p>Der Auditkoordinator muss anschließend ein Mitglied des Auditpersonals als leitender Auditor des Prüfungsauftrags auswählen. Diese Person ist verantwortlich dafür, Auditoren den Arbeitsunterlagen zuzuordnen, ' +
                                            'die automatisch für jedes Prüfobjekt im Umfang erstellt werden, sobald der Prüfungsauftrag gespeichert wurde. Der leitende Auditor ist auch für die Prüfung der Feldarbeit verantwortlich, die von jedem Auditor ausgeführt wird.</p>' +
                                            '<p>Der Auditkoordinator muss auch die Mitglieder des Auditpersonals auswählen, um sie als Auditoren zum Prüfungsauftrag hinzuzufügen. Jede Arbeitsunterlage muss einem Auditor zugeordnet sein, ' +
                                            'der verantwortlich ist, die Antworten der auditierten Stellen in dieser Arbeitsunterlage zu bewerten und zu verwalten. Die maximale Stundenanzahl, an der jeder Auditor an der Arbeitsunterlage arbeiten soll, ' +
                                            'kann definiert werden und später kann die Anzahl der Stunden, die tatsächlich verwendet wurden, zu den Zeitplänen im Abschnitt „Ressourcen verwalten“ dieses Moduls hinzugefügt werden.</p>' +
                                            '<p>Once all working papers associated with an audit engagement have been evaluated by auditors, and once any review notes supplied by the lead auditor have been taken into consideration, the lead auditor can close the engagement. ' +
                                            'Nach der Zuordnungsbewertung aller Arbeitsunterlagen zu einem Prüfungsauftrag kann der leitende Auditor den Prüfungsauftrag abschließen, nachdem eventuelle Bemerkungen geprüft und bei Bedarf umgesetzt wurden. Diese Aktion kann nicht wiederhergestellt werden.</p>' +
                                            '<p><strong>Registerkarte „Arbeitsunterlagen“</strong></p>' +
                                            '<p>In dieser Registerkarte wird eine Liste der automatisch erstellten Arbeitsunterlagen für alle Prüfobjekte im Umfang des Prüfungsauftrags angezeigt. In den Spalten werden der zugeordnete Auditor, ' +
                                            'die Anzahl der erstellten und beantworteten Fragen, der Prozentsatz des Fortschritts zu den beantworteten Fragen und der Genehmigungs- und Prüfungsstatus der Arbeitsunterlage angezeigt. Jede Arbeitsunterlage kann zudem per Mausklick auf das Prüfobjekt angezeigt werden.</p>',
                workingPaperHelpTextTitle: 'Arbeitsunterlage',
                workingPaperHelpText: '<p><strong>Registerkarte „Allgemein“</strong></p>' +
                                      '<p>In dieser Registerkarte werden allgemeine Informationen zu der Arbeitsunterlage angezeigt.</p>' +
                                      '<p>Hier muss der leitende Auditor einen Auditor zu der Arbeitsunterlage zuordnen, der per E-Mail benachrichtigt wird. Der leitende Auditor kann eine Beschreibung für die Arbeitsunterlage eingeben, ' +
                                      'sowie die Bewertungsverfahren und Empfehlungen, die die Auditoren während des Prüfungsauftrags befolgen sollen, eingeben. Anlagen können ebenfalls hochgeladen werden, die den Auditoren zur Verfügung stehen.</p>' +
                                      '<p>Die Feldarbeit für Prüfungsaufträge wird durch Arbeitsunterlagen mit Fragen durchgeführt, die jedes Prüfobjekt bewerten. Der Auditor ist für die Erstellung und den Import dieser Fragen in die Registerkarte ' +
                                      '„Fragebogen“, für die Bewertung der gelieferten Antworten von den auditierten Stellen und für die Protokollierung der Prüfungsfeststellungen, die in dem Prozess identifiziert wurden, verantwortlich, ' +
                                      'wenn die bewerteten Fragen nicht konform oder mangelhaft sind. Die Registerkarte „Fragebogen“ wird nur aktiviert, wenn ein Auditor zur Arbeitsunterlage hinzugefügt wurde.</p>' +
                                      '<p>Nachdem der Auditor die Antworten und Bemerkungen der auditierten Stelle geprüft hat, muss die Arbeitsunterlage bewertet werden, die anschließend genehmigt oder abgelehnt wird. Eine Arbeitsunterlage kann nur bewertet werden, ' +
                                      'wenn alle Fragen beantwortet wurden. Der leitende Auditor wird anschließend per E-Mail benachrichtigt, sodass er die Arbeitsunterlage prüfen kann. Nach der Genehmigung oder Ablehnung einer Arbeitsunterlage werden alle Fragen und Antworten schreibgeschützt angezeigt.</p>' +
                                      '<p>Nachdem der leitende Auditor die Antworten und Bemerkungen geprüft und Bemerkungen zu Prüfungen eingegeben hat, muss der Prüfungsstatus auf „Geprüft“ geändert werden. Der Auditor wird anschließend per E-Mail benachrichtigt, ' +
                                      'sodass er die Bemerkungen des leitenden Auditors prüfen kann. Basierend auf die Informationen, die vom leitenden Auditor eingegeben wurden, kann der Auditor eine Arbeitsunterlage bei Bedarf erneut bewerten.</p>' +
                                      '<p>Arbeitsunterlagen können jederzeit eingestellt werden. In diesem Fall werden die Fragen schreibgeschützt angezeigt, bis die Arbeitsunterlage erneut aufgenommen wird.</p>' +
                                      '<p><strong>Registerkarte „Fragebogen“</strong></p>' +
                                      '<p>Die Feldarbeit für Prüfungsaufträge wird durch Arbeitsunterlagen mit Fragen durchgeführt, die jedes Prüfobjekt bewerten. In dieser Registerkarte muss der Auditor diese Frage erstellen, die von den auditierten ' +
                                      'Stellen beantwortet werden, sodass das Prüfobjekt, das der Arbeitsunterlage zugeordnet ist, bewertet werden kann. </p>' +
                                      '<p>Für jede Frage muss der Auditor die Antwortoptionen, die verantwortliche auditierte Stelle für Antworten auf Fragen und eine Ablauffrist definieren, die für die Priorisierung der Frage verwendet werden kann. Auditierte ' +
                                      'Stellen müssen als Personen im Modul „Organisation“ registriert werden, bevor sie zugeordnet werden können. Fragen können auch bearbeitet und gelöscht werden, wenn sie nicht mehr erforderlich sind. ' +
                                      'Auditierte Stellen werden per E-Mail benachrichtigt, wenn eine ihnen zugeordnete Frage erstellt, bearbeitet oder gelöscht wurde, wobei sie diese im Audit-Portal oder im Modul „Startseite“ anzeigen und beantworten können.</p>' +
                                      '<p>Vorkonfigurierte Antwort-Sets können verwendet werden oder neue Sets können erstellt werden. Neue Sets werden weder gespeichert, noch werden Änderungen zu vorkonfigurierten Sets durchgeführt. ' +
                                      'Auditoren können Antworten im Namen der auditierten Stellen eingeben, falls sie keinen Zugriff auf das System haben. In diesem Fall werden die auditierten Stellen weder benachrichtigt, noch können sie diese Fragen im Audit-Portal anzeigen.</p>' +
                                      '<p>Wenn Fragen im Audit-Portal beantwortet werden, können auditierte Stellen auch Bemerkungen und Nachrichten hinterlassen werden, wobei sie Auditoren auch Anlagen senden können.</p>' +
                                      '<p>Auditoren können Fragen aus Prüfungsaufträgen importieren, um Fragebögen zu erstellen. In diesem Fall werden sie mit denselben Antwortoptionen importiert. Standardmäßig wird der Auditor, der die Fragen importiert hat, ' +
                                      'als auditierte Stelle zugeordnet, und das geplante Enddatum des Prüfungsauftrags wird als Ablauffrist verwendet. Diese Informationen können bei Bedarf bearbeitet werden.</p>' +
                                      '<p>Der Auditor wird per E-Mail benachrichtigt, wenn eine auditierte Stelle eine Antwort auf eine Frage sendet. Anschließend kann der Auditor die Frage bewerten. Wenn eine Frage bewertet wird, ' +
                                      'muss der Auditor auch eine Antwort im Namen der auditierten Stelle eingeben, falls diese Option beim Erstellen der Frage ausgewählt wurde.</p>' +
                                      '<p>Auditoren können Prüfungsfeststellungen aus bewerteten Fragen, die nicht konform oder mangelhaft sind, protokollieren. Diese werden als Feststellungsereignisse im Modul „Workflow“ erstellt, sodass sie angemessen behandelt werden können.</p>' +
                                      '<p>Nachdem der Auditor die Fragen aus einer Arbeitsunterlage bewertet hat, muss der Auditor diese in der Registerkarte „Allgemein“ genehmigen oder ablehnen.</p>',
                portalHelpTextTitle: 'Audit-Portal',
                portalHelpText: '<p>Im Audit-Portal wird eine Liste aller Prüfungsaufträge mit zugeordneten Fragen angezeigt.</p>' +
                                '<p>Wenn Sie auf einen Prüfungsauftrag klicken, werden alle Fragen aus diesem Prüfungsauftrag, zu dem Sie als auditierte Stelle zugeordnet werden, angezeigt. Sie müssen eine Antwort auf jede Frage auswählen, ' +
                                'wobei auch eine Begründung eingegeben werden kann. Sie können auch eine Nachricht hinterlassen und Dateien für die Auditoren hochladen.</p>' +
                                '<p>Anschließend können Sie Ihre Antwort absenden, sodass der Auditor die Bewertung einleiten kann. Sie müssen jede Frage separat beantworten. Jede Frage hat eine Ablauffrist. Sie können Fragen filtern, ' +
                                'um sie nach Status oder Ablauffrist anzuzeigen.</p>',
                resourcesHelpTextTitle: 'Audit-Ressourcen verwalten',
                resourcesHelpText: '<p><strong>Personal</strong></p>' +
                                   '<p>Personen, die bereits im Modul „Organisation“ registriert wurden, müssen als Mitglieder des Auditpersonals hinzugefügt werden, sodass sie auditbezogenen Rollen zugeordnet werden können.</p>' +
                                   '<p>Wenn Sie Personen zum Auditpersonal hinzufügen, muss ihre Position und Region angegeben werden. Ihre Qualifikationen und Zertifizierungen können ausgewählt werden und bei Bedarf können Sie in diesem ' +
                                   'Bereich einfach einen Namen eingeben und die Enter-Taste betätigen. Die Region, die Qualifikationen und die Zertifizierungen des Auditpersonals werden den Auditkoordinatoren angezeigt, wenn sie sie zu einem Prüfungsauftrag zuordnen.</p>' +
                                   '<p>Diese Felder können später bearbeitet werden, und Personalmitglieder können auch gelöscht werden. Beachten Sie, dass wenn eine Person zu einem Prüfungsaufträge aus dem Auditpersonal oder aus dem System gelöscht werden, wird das Wort „gelöscht“ in Klammern neben dem Namen der Person wo anwendbar angezeigt.</p>' +
                                   '<p><strong>Zeitpläne</strong></p>' +
                                   '<p>Auditoren können Arbeitsstunden an Prüfungsaufträgen mit Zeitplänen registrieren, die genehmigt oder abgelehnt werden können. Sie können nur Zeitpläne für Ihre eigenen Stunden erstellen.</p>' +
                                   '<p>Wenn Sie einen Zeitplan erstellen, müssen Sie die ausgeführten Aktivitäten, die zugeordneten Prüfungsaufträge, das Datum, an dem sie ausgeführt wurden und die Anzahl der Stunden eingeben. Optional kann eine Beschreibung eingegeben werden. Zeitpläne können bei Bedarf bearbeitet oder gelöscht werden.</p>',
            },
            table: {
                riskType: 'Risikotyp',
                riskName: 'Risikoverfahrensanweisung',
                riskOwner: 'Risikoeigner',
                riskSource: 'Risikoquelle',
                riskSource_0: 'Unternehmensrisiko',
                riskSource_1: 'Audit',
                processAssociated: 'Zugeordneter Prozess',
                subjectColumn: 'Prüfungsobjekt',
                functionColumn: 'Funktion',
                entityColumn: 'Entität',
                lastAssessment: 'Letzte Bewertung',
                controls: 'Kontrollen',
                riskRating: 'Risikopunktzahl',
                auditFunction: 'Auditfunktion',
                auditEntity: 'Auditentität',
                auditSubject: 'Prüfungsobjekt',
                rating: 'Auditkontrollpunktzahl',
                inherentRisk: 'Inhärentes Risiko',
                residualRisk: 'Restrisiko',
                effort: 'Erwartete Arbeitstage',
                responsible: 'Verantwortlich',
                openEngagements: 'Offene Prüfungsaufträge',
                openFindings: 'Offene Prüfungsfeststellungen',
                risks: 'Risiken',
                residualRisks: 'Restrisiken',
                name: 'Name',
                inherentRisks: 'Inhärente Risiken',
                lastEngagement: 'Letzter Prüfungsauftrag',
            },
        },
    };

    const verifyTextIntegrity = (string, type = 'parent') => {
        const element = document.querySelectorAll(`div[data-text="${string}"]`);
        const arrElement = Array.from(element);

        if (arrElement.length % 4 === 0) {
            return arrElement.map(el => document.querySelector(`#${el.id}`).className = `${type} ok`);
        } else if (arrElement.length % 4 !== 0) {
            return arrElement.map(el => document.querySelector(`#${el.id}`).className = `${type} partial`);
        }

        return arrElement.map(el => document.querySelector(`#${el.id}`).className = `${type} nok`);
    };

    const renderLevel = (nodes, element) => (
        Object.keys(nodes).map((content, key) => {
            if (nodes[content] && typeof nodes[content] === 'object') {
                element.innerHTML += `
                <div
                    data-text="${content}"
                    class="parent"
                    id="${element.id}-${content}-${key}"
                >
                    <strong>${content}:</strong>
                </div>
            `;

                verifyTextIntegrity(content, 'parent');
                return renderLevel(nodes[content], document.getElementById(`${element.id}-${content}-${key}`));
            }

            element.innerHTML += `
            <div
                data-text="${content}"
                class="node"
                id="${element.id}-${content}-${key}"
            >
                <strong>${content}:</strong> ${nodes[content]}
            </div>
        `;

            return verifyTextIntegrity(content, 'node');
        })
    );

    const contentWrapper = document.getElementById('content');
    renderLevel(translations, contentWrapper);

}());
