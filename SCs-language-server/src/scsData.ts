'use strict';

import { CompletionItemKind } from 'vscode-languageserver';

export const scsKeywords = [
    {
        name: "Syntax keywords",
        type: CompletionItemKind.Keyword,
        values: ['sc_node', 'sc_link', 'sc_common_arc', 'sc_common_edge', 'sc_main_arc', 'sc_membership_arc']
    },
    {
        name: "Keynodes",
        type: CompletionItemKind.Keyword,
        values: ['sc_const', 'sc_var', 'sc_edge_pos', 'sc_edge_neg', 'sc_edge_fuz', 'sc_edge_perm', 'sc_edge_temp',
                 'sc_node_tuple', 'sc_node_structure', 'sc_node_role_relation', 'sc_node_non_role_relation',
                  'sc_node_class', 'sc_node_superclass', 'sc_node_material']
    },
    {
        name: "Connectors",
        type: CompletionItemKind.Reference,
        values: ['-```', '~```', '=>', '->', '~>', "/>", '%>', '_=>', '_->', '_~>', "_/>", '_%>', '?=>', '?->', '?~>', "?/>", '?%>',
            '-?>', '?-?>', '_-?>', '~?>', '?~?>', '_~?>', '%?>', '?%?>', '_%?>', '-|>', '_-|>', '?-|>', '~|>', '_~|>', '?~|>', '%|>', 
            '_%|>', '?%|>', '<=>', '_<=>', '?<=>', '<-', '<=', '<~', '</', '<%', '<-?', '<=?', '<~?', '</?', '<%?', '<-_', '<=_', '<~_', 
            '</_', '<%_', '<?-?', '<?-', '<?-_', '<?~?', '<?%?', '<?~', '<?~_', '<?%', '<?%_', '<|-?', '<|~?', '<|%?', '<|-', '<|~', '<|%', 
            '<|-_', '<|~_', '<|%_', '..>', '?..>', '_..>', '..?>', '_..?>', '?..?>', '..|>', '_..|>', '?..|>', '.>', '_.>', '<..', '<..?', 
            '<.._', '<?..', '<?..?', '<?.._', '<|..', '<|..?', '<|.._', '<.', '<._', '_??>', '_?|>', '??>', '?|>', '<??', '<??_', '<|?', '<|?_', 
            '?.?>', '??|>', '<?.?', '<|??'
        ]
    }
];

export const scsDetails = new Map<string, string> ([
    ["sc_node","Set of all sc-nodes"],
    ["sc_link", "Set of all sc-links"],
    ["sc_common_arc","Set of all directional sc-edges"],
    ["sc_common_edge", "Set of all undirectional sc-edges"],
    ["sc_main_arc", "Set of all positive, const, acessory edges"],
    ["sc_membership_arc", "Set of all accessory edges"],
    ["sc_const", "Set of all constant objects"],
    ["sc_var", "Set of all vairable objects"],
    ["sc_edge_pos", "Set of all positive edges"],
    ["sc_edge_neg", "Set of all negative edges"],
    ["sc_edge_fuz", "Set of all fuzzy edges"],
    ["sc_edge_perm", "Set of all permanent edges"],
    ["sc_edge_temp", "Set of all temporary edges"],
    ["sc_node_tuple", "Set of all non binray tuples"],
    ["sc_node_structure", "Set of all structures"],
    ["sc_node_role_relation", "Set of all role relations"],
    ["sc_node_non_role_relation", "Set of all notole relations"],
    ["sc_node_class", "Set of all classes"],
    ["sc_node_material", "Set of all material objects"],
    ["sc_node_superclass", "Set of all superclass object"]
]);
